# aria-attributes [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

List of attributes defined by [ARIA][spec].

## Installation

[npm][]:

```bash
npm install aria-attributes
```

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

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/aria-attributes.svg

[travis]: https://travis-ci.org/wooorm/aria-attributes

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/aria-attributes.svg

[codecov]: https://codecov.io/github/wooorm/aria-attributes

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[spec]: https://www.w3.org/TR/aria-in-html/
