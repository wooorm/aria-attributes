/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module aria-attributes:script:build
 * @fileoverview Crawl the table of attributes.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var fs = require('fs');
var path = require('path');
var https = require('https');
var cheerio = require('cheerio');
var bail = require('bail');
var list = require('..');

/*
 * Input / output locations.
 */

var w3c = 'https://www.w3.org/TR/wai-aria/complete';
var output = path.join(__dirname, '..', 'index.json');

/*
 * Crawl W3C.
 */

https.get(w3c, function (res, err) {
    var value = '';

    bail(err);

    res
        .setEncoding('utf8')
        .on('data', function (buf) {
            value += buf;
        }).on('end', function () {
            if (err) {
                bail(err);
            }

            cheerio.load(value)('#index_state_prop dt a').each(function () {
                var data = this.attribs.href.slice(1);

                if (data && list.indexOf(data) === -1) {
                    list.push(data);
                }
            });

            fs.writeFile(
                output,
                JSON.stringify(list.sort(), 0, 2) + '\n',
                bail
            );
        });
});
