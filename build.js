import fs from 'node:fs'
import https from 'node:https'
import {bail} from 'bail'
import concatStream from 'concat-stream'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import {selectAll} from 'hast-util-select'
import {ariaAttributes} from './index.js'

https.get('https://www.w3.org/TR/wai-aria-1.2/', (response) => {
  response
    .pipe(
      concatStream((buf) => {
        const tree = unified().use(rehypeParse).parse(buf)
        const entries = selectAll('#index_state_prop dt a', tree)
        let index = -1

        if (entries.length === 0) {
          bail(new Error('Couldn’t find entries'))
        }

        while (++index < entries.length) {
          const data = String(entries[index].properties.href).slice(1)

          if (data && !ariaAttributes.includes(data)) {
            ariaAttributes.push(data)
          }
        }

        fs.writeFile(
          'index.js',
          'export const ariaAttributes = ' +
            JSON.stringify(ariaAttributes.sort(), null, 2) +
            '\n',
          bail
        )
      })
    )
    .on('error', bail)
})
