# markdown-eslint-parser

The ESLint custom parser for `.md` files. Mainly to use together with
[eslint-plugin-md](https://github.com/leo-buneev/eslint-plugin-md).

It doesn't actually produce markdown AST, just returns markdown code in a format acceptable by `eslint` for use with
`eslint-plugin-md`. To be clear, it returns Js AST with an empty "Program" node, but this node contains property
`mdCode` that contains markdown in string format.

## Usage

Typically you will use it together with [eslint-plugin-md](https://github.com/leo-buneev/eslint-plugin-md). To use
parser as a standalone package, just specify it in your `eslintrc`:

```bash
yarn add -D markdown-eslint-parser
```

```js
// .eslintrc
module.exports = {
  overrides: {
    '*.md': {
      parser: 'markdown-eslint-parser',
    },
  },
}
```
