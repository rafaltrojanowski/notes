import Ember from 'ember'

export default Ember.Route.extend(
  queryParams: {
    category: {
      refreshModel: true
    }
    school: {
      refreshModel: true
    }
  }

 model: (params) ->
   @store.query('note', params)
   # @store.query('note', { filter: "test", tags: null })
)
