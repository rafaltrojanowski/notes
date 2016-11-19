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
