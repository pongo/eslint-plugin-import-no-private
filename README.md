# eslint-plugin-import-no-private

Reports use of a deprecated name, as indicated by a JSDoc block with a `@private`
tag.

```js
// @file: ./answer.js

/**
 * this is what you get when you trust a mouse talk show
 * @private need to restart the experiment
 * @returns {Number} nonsense
 */
export function multiply(six, nine) {
  return 42
}
```

will report as such:

```js
import { multiply } from './answer' // Private: need to restart the experiment

function whatever(y, z) {
  return multiply(y, z) // Private: need to restart the experiment
}
```

## Installation

```shell script
npm install --save-dev pongo/eslint-plugin-import-no-private
```

Add `import-no-private` to the plugins section of your `.eslintrc` configuration file:

```json
{
    "plugins": [
        "import-no-private"
    ]
}
```

Then configure the rules:

```json
{
    "rules": {
        "import-no-private/no-private": "error"
    }
}
```

### Typescript paths

If you are using "baseUrl" and "paths" options, then you need install typescript resolver:

```shell script
npm install --save-dev eslint-import-resolver-typescript
```

Then configure the eslint settings:

```json
{
    "settings": {
        "import/resolver": {
            "typescript": {}
        }
    }
}
```

## Notes

This rule is a copy of [import/no-deprecated](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md) rule.
