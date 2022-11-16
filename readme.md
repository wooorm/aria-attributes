# aria-attributes

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of [ARIA][spec] attributes.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`ariaAttributes`](#ariaattributes)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a list of all ARIA attributes.

## When should I use this?

You can use this list if you want to know which attributes are known ARIA
attributes.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install aria-attributes
```

In Deno with [`esm.sh`][esmsh]:

```js
import {ariaAttributes} from 'https://esm.sh/aria-attributes@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {ariaAttributes} from 'https://esm.sh/aria-attributes@2?bundle'
</script>
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

This package exports the identifier `ariaAttributes`.
There is no default export.

### `ariaAttributes`

List of lowercase attributes including `role` (`Array<string>`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/html-tag-names`](https://github.com/wooorm/html-tag-names)
    — list of HTML tag names
*   [`wooorm/mathml-tag-names`](https://github.com/wooorm/mathml-tag-names)
    — list of MathML tag names
*   [`wooorm/svg-tag-names`](https://github.com/wooorm/svg-tag-names)
    — list of SVG tag names
*   [`wooorm/svg-element-attributes`](https://github.com/wooorm/svg-element-attributes)
    — map of SVG elements to attributes
*   [`wooorm/html-element-attributes`](https://github.com/wooorm/html-element-attributes)
    — map of HTML elements to attributes

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

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

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[spec]: https://www.w3.org/TR/wai-aria/
