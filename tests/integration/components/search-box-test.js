import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-box', 'Integration | Component | search box', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{search-box}}`);

  assert.equal(this.$('h1').text().trim(), 'Hello, Rafal!');
  assert.equal(this.$('p:first').text().trim(), "What are you looking for, huh?");
});

test('when clicks on submit', function(assert) {
  assert.expect(1);

  this.set('query', "watermelon");
  this.set('updateParams', () => {
    assert.ok(true);
  });

  this.render(hbs `{{search-box query=query updateParams=(action updateParams)}}`);
  this.$('input.submit-button').click();
});
