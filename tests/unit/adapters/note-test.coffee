`import { moduleFor, test } from 'ember-qunit'`

moduleFor 'adapter:note', 'Unit | Adapter | note', {
  # Specify the other units that are required for this test.
  # needs: ['serializer:foo']
}

# Replace this with your real tests.
test 'it exists', (assert) ->
  adapter = @subject()
  assert.ok adapter
