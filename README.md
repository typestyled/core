# @typestyled/core

> Configurable core library to preserve spacing and font line heights aligned 
> to a baseline grid.

`@typestyled/core` solves the problem of manually creating (global) variables 
to be shared across typed styles in order to preserve spacing and font line 
heights aligned to a baseline grid. Instead, `@typestyled/core` provides 
a configuration object that can be passed around. In addition, it also provides 
a few helper functions to compute line height and spacing units.

Look how easy it is to use:

```ts
import { configure } from '@typestyled/core'

const coreConfig = configure()
```

## Features

- Default configuration
- Adjustable settings for custom configuration
- Baseline grid
- Spacing units
- Font alignment to baseline grid
- Line height computation function
- Spacing unit computation function

## Quick Start

> The easiest way to get started with `@typestyled/core` is to follow along 
> as we go through the examples.

### Installing @typestyled/core

We recommend using [Yarn][1] or [npm][2] for managing front-end dependencies. 
If you are new to package managers, the [Yarn documentation][3] is a good place 
to start.

To install `@typestyled/core` with Yarn, run:

```sh
yarn init
yarn add @typestyled/core
```

To install @typestyled/core with npm, run:

```sh
npm init
npm install --save @typestyled/core
```

Both Yarn and npm download packages directly from the [npm registry][3].

#### Enable TypeScript and Typestyle

We recommend using `@typestyled` libraries with [TypeScript][4]. TypeScript is 
a strict syntatical superset of JavaScript and adds optional static typing 
to the JavaScript language, and [TypeStyle][5] is a type-safe CSS-in-JS 
framework that works nicely with Typestyled libraries.

### Hello World with TypeScript and TypeStyle

We recommend using a bundler like [webpack][6] or [Browserify][7], so you can 
write modular code and bundle it together into small packages to optimize 
load time.

A small `@typestyled/core` example looks like this:

```ts
import { configure } from '@typestyled/core'
import { style } from 'typestyle'

const {
  fontSize, // 16px
  lineHeight, // 24px
  piSpacingUnit, // 2px
  omicronSpacingUnit, // 4px
  xiSpacingUnit, // 8px
  nuSpacingUnit, // 16px
  lambdaSpacingUnit, // 32px
} = configure()

const helloClass = style({
  fontSize,
  lineHeight,
  margin: `${lambdaSpacingUnit} auto`,
  padding: `${xiSpacingUnit} ${nuSpacingUnit}`,
  backgroundColor: `yellow`,
  border: `${piSpacingUnit} solid red`,
  borderRadius: xiSpacingUnit,
  boxShadow: `${xiSpacingUnit} ${xiSpacingUnit} ${omicronSpacingUnit} #888`,
  width: `300px`
})

const element = document.createElement('div')
element.innerHtml = 'Hello World!'
element.classList.add(helloClass)
document.body.appendChild(element)
```

This code gets the default configuration, and uses the spacing units to make 
a CSS class with TypeStyle's `style` function.

## Contribute

- Issue tracker: https://github.com/typestyled/core/issues
- Source code: https://github.com/typestyled/core

## License

Copyright © 2017 The Typestyled Authors.

Licensed under the MIT license. See LICENSE.txt in the project root for complete 
license information.

[1]: https://yarnpkg.com/
[2]: https://www.npmjs.com/
[3]: https://yarnpkg.com/en/docs/getting-started
[4]: https://www.typescriptlang.org/
[5]: https://github.com/typestyle/typestyle#readme
[6]: https://webpack.js.org/
[7]: http://browserify.org/
[8]: https://www.webpackbin.com/bins/-Kx1JzePWLXVd4W2c4k7