# eslint-plugin-import-no-private

Disallow private imports, indicated by a JSDoc block with a `@private` tag.

```js
// answer.js

/** @private */
export function multiply(six, nine) {
  return 42
}
```

will report as such:

```js
import { multiply } from './answer' // Private imports disallowed.

function whatever(y, z) {
  return multiply(y, z) // Private imports disallowed.
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

Also, you can disable this rule for test files:

```json
{
    "overrides": [
        {
            "files": ["*.test.js", "./test/**/*.js"],
            "rules": {
              "import-no-private/no-private": 0
            }
        }
    ]
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

This rule is a copy-paste of [import/no-deprecated](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md) rule.
