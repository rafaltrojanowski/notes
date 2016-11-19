`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'search-box', 'Integration | Component | search box', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  @render hbs """{{search-box}}"""

  assert.equal @$('h1').text().trim(), 'Hello, Rafal!'
  assert.equal @$('p:first').text().trim(), "What are you looking for, huh?"
