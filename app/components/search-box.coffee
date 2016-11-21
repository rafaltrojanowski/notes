`import Ember from 'ember'`

SearchBoxComponent = Ember.Component.extend(
  searchQuery: ""

  actions:
    updateParams: ->
      @set('query', @get('searchQuery'))
      @sendAction('updateParams')
)

`export default SearchBoxComponent`
