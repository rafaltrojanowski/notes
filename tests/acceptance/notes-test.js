import { test } from 'qunit';
import moduleForAcceptance from 'notes/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | notes');

test('visiting /notes', function(assert) {
  visit('/notes');

  andThen(function() {
    assert.equal(currentURL(), '/notes');
    assert.equal(find('h1').text(), 'Hello, Rafal!');
  });
});


test('render list of notes', function(assert) {
  server.createList('note', 10);

  visit('/notes');

  andThen(function() {
    assert.equal(find('li:first').text(), 'Note#0');
  });
});

test('remove category query param from url', function(assert) {
  visit('/notes?category=jazz');

  click('.reset-query-param');

  andThen(function() {
    assert.equal(currentURL(), '/notes');
  });
});

test('filter by school on button click', function(assert) {
  visit('/notes');

  fillIn('input.school', "Emberschool");
  click('input.submit-button');

  andThen(function() {
    assert.equal(currentURL(), '/notes?school=Emberschool');
  });
});

// TODO: trigger form submit on Enter key press
// test('filter by category on form submit', function(assert) {
  // visit('/notes');

  // fillIn('input.category', "Testing");

  // keyEvent('input.category', 'keypress', 13).then(function() {
    // assert.equal(currentURL(), '/notes?category=Testing');
  // });
// });
