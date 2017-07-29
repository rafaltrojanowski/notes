import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['query'],
  query: null,

  actions: {
    updateParams() {
      this.transitionToRoute('search', {
        queryParams: {
          query: this.get('query')
        }
      });
    },

    close() {
      let lastVisitedRoute = localStorage['lastVisitedRoute'] || "index";
      this.transitionToRoute(lastVisitedRoute);
    }
  }
});
