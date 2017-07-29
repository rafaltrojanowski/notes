import { test, moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('note-item', 'Integration | Component | note item', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs `{{note-item}}`);

  assert.equal(this.$().text().trim(), '');
});
