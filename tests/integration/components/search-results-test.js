import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-results', 'Integration | Component | search results', {
  integration: true
});

test('it renders notes', function(assert) {
  assert.expect(2);

  let note1 = Ember.Object.create({
    id: 1,
    title: 'hello world!'
  });

  let note2 = Ember.Object.create({
    id: 2,
    title: 'this is my first note'
  });

  let notes = Ember.A([note1, note2]);

  this.set('model', notes);
  this.render(hbs `{{search-results notes=model}}`);

  assert.equal(this.$('li.note:first').text().trim(), 'hello world!');
  assert.equal(this.$('li.note:eq(1)').text().trim(), 'this is my first note');
});
