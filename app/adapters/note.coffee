import DS from 'ember-data'
import UrlTemplates from "ember-data-url-templates"

NoteAdapter = DS.JSONAPIAdapter.extend UrlTemplates,

  namespace: 'api'

  queryUrlTemplate: '{+host}/{+namespace}/notes{?query*}'

`export default NoteAdapter`
