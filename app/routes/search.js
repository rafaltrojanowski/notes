import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    query: {
      refreshModel: true
    }
  },

  beforeModel() {
    let previousRoutes = this.router.router.currentHandlerInfos;
    let previousRoute = previousRoutes && previousRoutes.pop();

    if (previousRoute && previousRoute.name !== 'search') {
      localStorage['lastVisitedRoute'] = previousRoute.name;
    }
  },

  model(params) {
    let q = params.query;

    if (q) {
      return this.store.query('note', { title: q });
    } else {
      return this.store.findAll('note', { reload: true });
    }
  }
});
