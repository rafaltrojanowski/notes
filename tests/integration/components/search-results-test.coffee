`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'search-results', 'Integration | Component | search results', {
  integration: true
}

test 'it renders notes', (assert) ->
  assert.expect 2

  note1 = Ember.Object.create(
    id: 1,
    title: 'hello world!'
  )

  note2 = Ember.Object.create(
    id: 2,
    title: 'this is my first note'
  )

  notes = Ember.A([note1, note2])

  @set('model', notes);
  @render hbs """{{search-results notes=model}}"""

  assert.equal @$('li.note:first').text().trim(), 'hello world!'
  assert.equal @$('li.note:eq(1)').text().trim(), 'this is my first note'
