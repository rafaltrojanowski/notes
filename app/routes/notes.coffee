import Ember from 'ember'

export default Ember.Route.extend(

 model: (params) ->
   @store.query('note', params)
   # @store.query('note', { filter: "test", tags: null })
)
