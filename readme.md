# aria-attributes

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of attributes defined by [ARIA][spec].

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install aria-attributes
```

## Use

```js
import {ariaAttributes} from 'aria-attributes'

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

This package exports the following identifiers: `ariaAttributes`.
There is no default export.

### `ariaAttributes`

`Array.<string>` — List of lowercase dash-cased attributes (including `role`).

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/aria-attributes/workflows/main/badge.svg

[build]: https://github.com/wooorm/aria-attributes/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/aria-attributes.svg

[coverage]: https://codecov.io/github/wooorm/aria-attributes

[downloads-badge]: https://img.shields.io/npm/dm/aria-attributes.svg

[downloads]: https://www.npmjs.com/package/aria-attributes

[size-badge]: https://img.shields.io/bundlephobia/minzip/aria-attributes.svg

[size]: https://bundlephobia.com/result?p=aria-attributes

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[spec]: https://www.w3.org/TR/wai-aria/
