import { test, skip } from 'qunit';
import moduleForAcceptance from 'notes/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Search');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('.navigation a#search').text(), 'Search');
  });
});

test('opening routable search modal', function(assert) {
  visit('/');
  click('.navigation a#search');

  andThen(function() {
    assert.equal(currentURL(), '/search');
    assert.equal(find('h1').text(), 'Hello, Rafal!');
    assert.equal(find('.ember-modal-dialog p').text(), 'What are you looking for, huh?');
  });
});

test('search by query and submit', function(assert) {
  visit('/search');

  fillIn('input.search-query', 'watermelon');
  click('input.submit-button');

  andThen(function() {
    assert.equal(currentURL(), '/search?query=watermelon');
  });
});

test('search by query without submit', function(assert) {
  visit('/search');

  fillIn('input.search-query', 'wate');

  andThen(function() {
    assert.equal(currentURL(), '/search');
  });
});

test('close search modal', function(assert) {
  visit('/search');

  click('a.search-close');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('query notes by title', function(assert) {
  server.createList('note', 10);

  visit('/search');

  andThen(function() {
    assert.equal(find('ul.notes li').length, 0);
  });

  fillIn('input.search-query', 'Note#5');
  click('input.submit-button');

  andThen(function() {
    assert.equal(find('ul.notes li').length, 1);
    assert.equal(find('ul.notes li:first').text().trim(), "Note#5");
  });
});

test('click on close does redirect back to the previous route', function(assert) {
  server.createList('note', 1);

  visit('/notes');

  andThen(function() {
    assert.equal(currentURL(), '/notes');
  });

  click('a#search');

  andThen(function() {
    assert.equal(currentURL(), '/search');
  });

  // ensures that search path is not stored in localStorage as previous route
  fillIn('input.search-query', 'Note#5');
  click('input.submit-button');

  andThen(function() {
    assert.equal(currentURL(), '/search?query=Note%235');
  });

  click('a.search-close');

  andThen(function() {
    assert.equal(currentURL(), '/notes');
  });
});

skip('click on close does redirect back to the previous route for single resource paths', function(assert) {
  server.createList('note', 1);

  visit('/notes/1');

  andThen(function() {
    assert.equal(currentURL(), '/notes/1');
  });

  click('a#search');

  andThen(function() {
    assert.equal(currentURL(), '/search');
  });

  click('a.search-close');

  andThen(function() {
    assert.equal(currentURL(), '/notes/1');
  });
});
