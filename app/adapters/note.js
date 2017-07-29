import DS from 'ember-data';
import UrlTemplates from "ember-data-url-templates";

export default DS.JSONAPIAdapter.extend({
  UrlTemplates,

  namespace: 'api',
  queryUrlTemplate: '{+host}/{+namespace}/notes{?query*}',

});
