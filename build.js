'use strict';

var fs = require('fs');
var path = require('path');
var https = require('https');
var bail = require('bail');
var concat = require('concat-stream');
var unified = require('unified');
var parse = require('rehype-parse');
var selectAll = require('hast-util-select').selectAll;
var list = require('./');

https.get('https://www.w3.org/TR/wai-aria/complete', function (res) {
  res.pipe(concat(onconcat)).on('error', bail);

  function onconcat(buf) {
    var tree = unified().use(parse).parse(buf);

    selectAll('#index_state_prop dt a', tree).forEach(function (node) {
      var data = node.properties.href.slice(1);

      if (data && list.indexOf(data) === -1) {
        list.push(data);
      }
    });

    fs.writeFile(
      path.join(__dirname, 'index.json'),
      JSON.stringify(list.sort(), 0, 2) + '\n',
      bail
    );
  }
});
