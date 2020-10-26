'use strict'

var fs = require('fs')
var https = require('https')
var bail = require('bail')
var concat = require('concat-stream')
var unified = require('unified')
var parse = require('rehype-parse')
var selectAll = require('hast-util-select').selectAll
var list = require('.')

https.get('https://www.w3.org/TR/wai-aria-1.2/', onresponse)

function onresponse(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(buf) {
  var tree = unified().use(parse).parse(buf)

  var entries = selectAll('#index_state_prop dt a', tree)

  if (entries.length === 0) {
    bail(new Error('Couldn’t find entries'))
  }

  entries.forEach(add)

  fs.writeFile('index.json', JSON.stringify(list.sort(), 0, 2) + '\n', bail)

  function add(node) {
    var data = node.properties.href.slice(1)

    if (data && !list.includes(data)) {
      list.push(data)
    }
  }
}
