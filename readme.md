# aria-attributes [![Build Status][travis-badge]][travis]

List of attributes defined by [ARIA][spec].

## Installation

[npm][]:

```bash
npm install aria-attributes
```

## Usage

```javascript
var ariaAttributes = require('aria-attributes')

console.log(ariaAttributes)
```

Yields:

```js
[ 'aria-activedescendant',
  'aria-atomic',
  'aria-autocomplete',
  'aria-busy',
  'aria-checked',
  'aria-controls',
  'aria-describedby',
  'aria-disabled',
  'aria-dropeffect',
  'aria-expanded',
  'aria-flowto',
  'aria-grabbed',
  'aria-haspopup',
  'aria-hidden',
  'aria-invalid',
  'aria-label',
  'aria-labelledby',
  'aria-level',
  'aria-live',
  'aria-multiline',
  'aria-multiselectable',
  'aria-orientation',
  'aria-owns',
  'aria-posinset',
  'aria-pressed',
  'aria-readonly',
  'aria-relevant',
  'aria-required',
  'aria-selected',
  'aria-setsize',
  'aria-sort',
  'aria-valuemax',
  'aria-valuemin',
  'aria-valuenow',
  'aria-valuetext',
  'role' ]
```

## API

### `ariaAttributes`

`Array.<string>` — List of lower-case dash-cased attributes (including
`role`).

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/aria-attributes.svg

[travis]: https://travis-ci.org/wooorm/aria-attributes

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[spec]: https://www.w3.org/TR/aria-in-html/
