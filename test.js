'use strict'

var assert = require('assert')
var test = require('tape')
var ariaAttributes = require('.')

test('ariaAttributes', function (t) {
  t.ok(Array.isArray(ariaAttributes), 'should be an `array`')

  t.doesNotThrow(function () {
    var index = -1

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
