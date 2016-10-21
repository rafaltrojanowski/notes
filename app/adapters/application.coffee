`import DS from 'ember-data'`

ApplicationAdapter = DS.JSONAPIAdapter.extend
  namespace: 'api'

`export default ApplicationAdapter`
