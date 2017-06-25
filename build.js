'use strict';

var fs = require('fs');
var path = require('path');
var https = require('https');
var cheerio = require('cheerio');
var bail = require('bail');
var list = require('./');

https.get('https://www.w3.org/TR/wai-aria/complete', function (res, err) {
  var value = '';

  bail(err);

  res
    .setEncoding('utf8')
    .on('data', function (buf) {
      value += buf;
    })
    .on('end', function () {
      cheerio.load(value)('#index_state_prop dt a').each(function () {
        var data = this.attribs.href.slice(1);

        if (data && list.indexOf(data) === -1) {
          list.push(data);
        }
      });

      fs.writeFile(
        path.join(__dirname, 'index.json'),
        JSON.stringify(list.sort(), 0, 2) + '\n',
        bail
      );
    });
});
