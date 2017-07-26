import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('notes');
  this.route('note', { path: '/notes/:note_id' });
  this.route('search');
});

export default Router;
