import Ember from 'ember'

export default Ember.Route.extend(
  queryParams: {
    query: {
      refreshModel: true
    }
  }

  model: (params) ->
    @set('params', params)

  setupController: (controller, model) ->
    notes = @store.query('note', { title: @get('params.query') })
    controller.set('model', notes)

)
