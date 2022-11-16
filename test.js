import assert from 'node:assert/strict'
import test from 'node:test'
import {ariaAttributes} from './index.js'

test('ariaAttributes', function () {
  assert.ok(Array.isArray(ariaAttributes), 'should be an array')

  let index = -1

  while (++index < ariaAttributes.length) {
    assert.strictEqual(
      typeof ariaAttributes[index],
      'string',
      '`' + ariaAttributes[index] + '` should be a string'
    )
  }
})
