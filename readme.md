# aria-attributes

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of attributes defined by [ARIA][spec].

## Install

[npm][]:

```sh
npm install aria-attributes
```

## Use

```js
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
  // …
  'aria-valuemax',
  'aria-valuemin',
  'aria-valuenow',
  'aria-valuetext',
  'role' ]
```

## API

### `ariaAttributes`

`Array.<string>` — List of lowercase dash-cased attributes (including `role`).

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/aria-attributes/workflows/main/badge.svg

[build]: https://github.com/wooorm/aria-attributes/actions

[downloads-badge]: https://img.shields.io/npm/dm/aria-attributes.svg

[downloads]: https://www.npmjs.com/package/aria-attributes

[size-badge]: https://img.shields.io/bundlephobia/minzip/aria-attributes.svg

[size]: https://bundlephobia.com/result?p=aria-attributes

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[spec]: https://www.w3.org/TR/wai-aria/
