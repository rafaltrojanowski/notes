import Ember from 'ember'

export default Ember.Route.extend(

  setupController: (controller, model) ->
    notes = @store.findAll('note')
    controller.set('model', notes)

)
