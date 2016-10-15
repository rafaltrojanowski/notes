import { test } from 'qunit';
import moduleForAcceptance from 'notes/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | root');

test('visiting /root', function(assert) {
  visit('/root');

  andThen(function() {
    assert.equal(currentURL(), '/root');
  });
});
