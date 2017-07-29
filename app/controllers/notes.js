import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['category', 'school'],
  category: null,
  school:   null,

  searchQuery: Ember.computed(function(){
    return {
      category: null,
      school: null
    };
  }),

  actions: {
    updateParams() {
      let queryParams = this.get('searchQuery');
      this.transitionToRoute('notes', { queryParams: queryParams });
    }
  }
});
