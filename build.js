import fs from 'node:fs/promises'
import fetch from 'node-fetch'
import {fromHtml} from 'hast-util-from-html'
import {selectAll} from 'hast-util-select'
import {ariaAttributes} from './index.js'

const response = await fetch('https://www.w3.org/TR/wai-aria-1.2/')
const text = await response.text()
const tree = fromHtml(text)
const entries = selectAll('#index_state_prop dt a', tree)
let index = -1

if (entries.length === 0) {
  throw new Error('Couldn’t find entries')
}

while (++index < entries.length) {
  const node = entries[index]
  const data = String((node.properties || {}).href).slice(1)

  if (data) {
    ariaAttributes.push(data)
  }
}

const list = [...new Set(ariaAttributes)].sort()

await fs.writeFile(
  'index.js',
  [
    '/**',
    ' * List of ARIA attributes.',
    ' *',
    ' * @type {Array<string>}',
    ' */',
    'export const ariaAttributes = ' + JSON.stringify(list, null, 2),
    ''
  ].join('\n')
)
