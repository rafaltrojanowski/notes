import Ember from 'ember'

export default Ember.Route.extend(
  queryParams: {
    query: {
      refreshModel: true
    }
  }

  beforeModel: ->
    previousRoutes = this.router.router.currentHandlerInfos
    previousRoute = previousRoutes && previousRoutes.pop()

    if previousRoute && previousRoute.name != 'search'
      localStorage['lastVisitedRoute'] = previousRoute.name

  model: (params) ->
    @set('params', params)

  setupController: (controller, model) ->
    notes = @store.query('note', { title: @get('params.query') })
    controller.set('model', notes)
)
