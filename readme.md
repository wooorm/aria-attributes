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
  'aria-busy',
  'aria-controls',
  'aria-describedby',
  'aria-dropeffect',
  'aria-expanded',
  'aria-flowto',
  'aria-grabbed',
  'aria-haspopup',
  'aria-hidden',
  'aria-label',
  'aria-labelledby',
  'aria-level',
  'aria-live',
  'aria-orientation',
  'aria-owns',
  'aria-posinset',
  'aria-pressed',
  'aria-relevant',
  'aria-setsize',
  'aria-sort',
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
