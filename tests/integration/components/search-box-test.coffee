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

test 'when clicks on submit', (assert) ->
  assert.expect 1

  @set('query', "watermelon")

  @set('updateParams', () =>
    assert.ok(true)
  );

  @render hbs """{{search-box query=query updateParams=(action updateParams)}}"""
  @.$('input.submit-button').click();
