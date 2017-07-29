import Ember from 'ember';

export default Ember.Component.extend({
  searchQuery: "",

  actions: {
    updateParams() {
      this.set('query', this.get('searchQuery'));
      this.sendAction('updateParams');
    }
  }
});
