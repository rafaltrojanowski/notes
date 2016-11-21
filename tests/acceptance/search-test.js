import { test } from 'qunit';
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

test('list all notes', function(assert) {
  visit('/search');

  andThen(function() {
    assert.equal(find('ul.notes li:first').text(), 'Todo list');
  });
});
