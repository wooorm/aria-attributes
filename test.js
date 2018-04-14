'use strict';

var assert = require('assert');
var test = require('tape');
var ariaAttributes = require('.');

test('ariaAttributes', function (t) {
  t.ok(Array.isArray(ariaAttributes), 'should be an `array`');

  t.doesNotThrow(function () {
    ariaAttributes.forEach(function (tagName) {
      assert(typeof tagName, 'string', '`' + tagName + '` should be a string');
    });
  }, 'should be an array of strings');

  t.end();
});
