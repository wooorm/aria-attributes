# aria-attributes [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

List of attributes defined by [ARIA][spec].

## Installation

[npm][]:

```bash
npm install aria-attributes
```

**aria-attributes** is also available as an AMD, CommonJS, and globals
module, [uncompressed and compressed][releases].

## Usage

Dependencies:

```javascript
var ariaAttributes = require('aria-attributes');
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

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/aria-attributes.svg

[build-page]: https://travis-ci.org/wooorm/aria-attributes

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/aria-attributes.svg

[coverage-page]: https://codecov.io/github/wooorm/aria-attributes?branch=master

[npm]: https://docs.npmjs.com/cli/install

[releases]: https://github.com/wooorm/aria-attributes/releases

[license]: LICENSE

[author]: http://wooorm.com

[spec]: https://www.w3.org/TR/aria-in-html/
