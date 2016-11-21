import Ember from 'ember'

export default Ember.Controller.extend(
  queryParams: ['query']
  query: null

  actions:
    updateParams: ->
      @transitionToRoute('search', queryParams: { query: @get('query') })
)