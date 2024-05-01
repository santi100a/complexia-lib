# Santi's Complex Number Library

[![Build Status][workflow badge]][repo actions]
[![npm homepage][npm badge]][npm home]
[![GitHub stars][stars badge]][repo url]
[![License][license badge]][repo url]
[![Bundlephobia stats][bundlephobia badge]][bundlephobia url]

[workflow badge]: https://github.com/santi100a/complexia-lib/actions/workflows/ci.yml/badge.svg
[npm badge]: https://img.shields.io/npm/v/@santi100a/complexia-lib
[stars badge]: https://img.shields.io/github/stars/santi100a/complexia-lib.svg
[license badge]: https://img.shields.io/github/license/santi100a/complexia-lib.svg
[bundlephobia badge]: https://img.shields.io/bundlephobia/min/@santi100a/complexia-lib
[npm home]: https://npmjs.org/package/@santi100a/complexia-lib
[repo actions]: https://github.com/santi100a/complexia-lib/actions
[repo url]: https://github.com/santi100a/complexia-lib
[bundlephobia url]: https://bundlephobia.com/package/@santi100a/complexia-lib@latest

- 🚀 Lightweight and fast
- 👴 ES3-compliant
- 💻 Portable between the browser and Node.js

## What's this?

This library is a small, simple utility for working with complex numbers.

The name comes from the videos of a YouTube channel called [Morphocular](https://youtube.com/channel/UCu7Zwf4X_OQ-TEnou0zdyRA),
where some character always said "To Complexia!" before addressing topics involving complex numbers.

## Installation

- Via NPM: `npm install @santi100a/complexia-lib`
- Via Yarn: `yarn add @santi100a/complexia-lib`
- Via PNPM: `pnpm install @santi100a/complexia-lib`

## API

- `class ComplexNumber;` A complex number.

  - Property `ComplexNumber.real: number;` The real part of the complex number.
  - Property `ComplexNumber.imaginary: number;` The imaginary part of the complex number.
  - `constructor ComplexNumber(real: number, imaginary: number): ComplexNumber;` Represents a complex number with real and  
     imaginary parts.

    | Name        | Type     | Description                               | Optional? | Default |
    | ----------- | -------- | ----------------------------------------- | --------- | ------- |
    | `real`      | `number` | The real part of the complex number.      | No        | _N/A_   |
    | `imaginary` | `number` | The imaginary part of the complex number. | No        | _N/A_   |

  - `ComplexNumber.conjugate(): ComplexNumber;` Returns the conjugate of the complex number.
  - `ComplexNumber.modulus(): number;` Returns the modulus (magnitude or distance to the origin) of the complex number.
  - `ComplexNumber.argument(): number;` Returns the argument (phase or angle with the positive x-axis) of the complex number
    in radians.

- Static method `ComplexNumber.fromPolar(modulus: number, argument: number): ComplexNumber;` Creates a complex number from polar
  coordinates (modulus and argument).

  | Name       | Type     | Description                         | Optional? | Default |
  | ---------- | -------- | ----------------------------------- | --------- | ------- |
  | `modulus`  | `number` | The modulus of the complex number.  | No        | _N/A_   |
  | `argument` | `number` | The argument of the complex number. | No        | _N/A_   |

- `function complexAdd(z1: ComplexNumber, z2: ComplexNumber): ComplexNumber;` Adds two complex numbers together.

  | Name | Type            | Description                      | Optional? | Default |
  | ---- | --------------- | -------------------------------- | --------- | ------- |
  | `z1` | `ComplexNumber` | The first term of the addition.  | No        | _N/A_   |
  | `z2` | `ComplexNumber` | The second term of the addition. | No        | _N/A_   |

- `function complexSubtract(z1: ComplexNumber, z2: ComplexNumber): ComplexNumber;` Subracts `z2` from `z1`.

  | Name | Type            | Description                         | Optional? | Default |
  | ---- | --------------- | ----------------------------------- | --------- | ------- |
  | `z1` | `ComplexNumber` | The first term of the subtraction.  | No        | _N/A_   |
  | `z2` | `ComplexNumber` | The second term of the subtraction. | No        | _N/A_   |

- `function complexMultiply(z1: ComplexNumber, z2: ComplexNumber): ComplexNumber;` Multiplies two complex numbers together.

  | Name | Type            | Description                            | Optional? | Default |
  | ---- | --------------- | -------------------------------------- | --------- | ------- |
  | `z1` | `ComplexNumber` | The first term of the multiplication.  | No        | _N/A_   |
  | `z2` | `ComplexNumber` | The second term of the multiplication. | No        | _N/A_   |

- `function complexDivide(z1: ComplexNumber, z2: ComplexNumber): ComplexNumber;` Divides `z1` by `z2`.

  | Name | Type            | Description                      | Optional? | Default |
  | ---- | --------------- | -------------------------------- | --------- | ------- |
  | `z1` | `ComplexNumber` | The numerator of the division.   | No        | _N/A_   |
  | `z2` | `ComplexNumber` | The denominator of the division. | No        | _N/A_   |

## Usage

```typescript
const { ComplexNumber } = require('@santi100a/complexia-lib'); // CommonJS
import { ComplexNumber } from '@santi100a/complexia-lib'; // ESM/TypeScript

// Create a complex number with real part 2 and imaginary part 3
const complexNumber = new ComplexNumber(2, 3);

// Get the conjugate of the complex number
const conjugate = complexNumber.conjugate(); // returns ComplexNumber { real: 2, imaginary: -3 }

// Get the modulus of the complex number
const modulus = complexNumber.modulus(); // returns 3.605551275463989

// Get the argument of the complex number
const argument = complexNumber.argument(); // returns 0.982793723247329

// Create a complex number from polar coordinates
const polarComplexNumber = ComplexNumber.fromPolar(4, Math.PI / 4); // returns ComplexNumber { real: 2.8284271247461903, imaginary: 2.8284271247461903 }
```

## Contribute

Wanna contribute? [File an issue](https://github.com/santi100a/complexia-lib/issues) or [pull request](https://github.com/santi100a/complexia-lib/pulls)!
Look at [the contribution instructions](https://github.com/santi100a/complexia-lib/blob/main/CONTRIBUTING.md) and make sure you follow the [contribution Code of Conduct](https://github.com/santi100a/complexia-lib/blob/main/CODE_OF_CONDUCT.md).
