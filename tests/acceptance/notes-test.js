import { test } from 'qunit';
import moduleForAcceptance from 'notes/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | notes');

test('visiting /notes', function(assert) {
  visit('/notes');

  andThen(function() {
    assert.equal(currentURL(), '/notes');
  });
});
