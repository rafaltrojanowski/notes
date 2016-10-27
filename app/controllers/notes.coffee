import Ember from 'ember'

export default Ember.Controller.extend(
  queryParams: ['category', 'school']
  category: null # default
  school:   null   # default

  searchQuery: Ember.computed ->
    {
      category: null
      school: null
    }

  actions:
    updateParams: ->
      queryParams = @get('searchQuery')
      @transitionToRoute('notes', { queryParams: queryParams })
)
