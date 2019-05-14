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
  // ...
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

[license]: license

[author]: https://wooorm.com

[spec]: https://www.w3.org/TR/wai-aria/
