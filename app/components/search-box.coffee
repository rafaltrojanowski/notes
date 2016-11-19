`import Ember from 'ember'`

SearchBoxComponent = Ember.Component.extend(
  query: ""

  actions:
    updateParams: ->
      @sendAction('updateParams')
)

`export default SearchBoxComponent`
