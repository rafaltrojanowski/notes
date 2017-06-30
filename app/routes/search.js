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

  model() {
    Ember.run.schedule('afterRender', this, this._fetchNotes);
  },

  _fetchNotes() {
    let { controller, store } = this;
    let { query } = controller;

    controller.set('isLoading', true);

    if (query) {
      store.query('note', { title: query })
        .then(this._loadNotes.bind(this))
        .finally(this._done.bind(this));
    } else {
      store.findAll('note', { reload: true })
        .then(this._loadNotes.bind(this))
        .finally(this._done.bind(this));
    }
  },

  _loadNotes(notes) {
    this.controller.set('model', notes);
  },

  _done() {
    this.controller.set('isLoading', false);
  }
});
