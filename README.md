# rand-otp

A simple one time password generator.

## Index

- [Install](#install)
- [Usage](#usage)

## Install

```bash
npm i rand-otp
```

## Usage

```js
const randOtp = require('rand-otp');

randOtp.generate(6, { upperCase: false });
```

### generate(length, options)

_Arguments_

- `length` - length of password. Optional if `options` is optional. Default length is 10.
- `options` - optional
  - `digits` - Default: `true`
  - `alphabets` - Default: `true`
  - `upperCase` - Default: `true`
