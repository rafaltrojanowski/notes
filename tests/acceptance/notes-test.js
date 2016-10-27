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

test('remove category query param from url', function(assert) {
  visit('/notes?category=jazz');

  click('.reset-query-param');

  andThen(function() {
    assert.equal(currentURL(), '/notes');
  });
});
