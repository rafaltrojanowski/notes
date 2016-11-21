`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'search-results', 'Integration | Component | search results', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 1

  @render hbs """{{search-results}}"""

  assert.equal @$().text().trim(), ''
