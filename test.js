import assert from 'node:assert'
import test from 'tape'
import {ariaAttributes} from './index.js'

test('ariaAttributes', function (t) {
  t.ok(Array.isArray(ariaAttributes), 'should be an `array`')

  t.doesNotThrow(function () {
    let index = -1

    while (++index < ariaAttributes.length) {
      assert.strictEqual(
        typeof ariaAttributes[index],
        'string',
        '`' + ariaAttributes[index] + '` should be a string'
      )
    }
  }, 'should be an array of strings')

  t.end()
})
