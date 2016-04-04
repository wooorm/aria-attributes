/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module aria-attributes
 * @fileoverview Test suite for `aria-attributes`.
 */

'use strict';

/* eslint-env node */

/*
 * Module dependencies.
 */

var test = require('tape');
var ariaAttributes = require('./index.js');

/*
 * Tests.
 */

test('ariaAttributes', function (t) {
    t.ok(
        Array.isArray(ariaAttributes),
        'should be an `array`'
    );

    ariaAttributes.forEach(function (tagName) {
        t.equal(
            typeof tagName,
            'string',
            '`' + tagName + '` should be a string'
        );
    });

    t.end();
});
