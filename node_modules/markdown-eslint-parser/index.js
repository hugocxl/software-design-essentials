module.exports = {
  parseForESLint(code, config) {
    const filePath = config.filePath
    if (filePath !== '<input>' && !filePath.endsWith('.md')) {
      throw new Error(`Make sure that markdownParser is applied only for *.md files (tried to apply to: ${filePath})`)
    }
    return {
      ast: {
        // ast is JS ast. We don't have JS, so this AST is for empty JS file
        type: 'Program',
        start: 0,
        end: 0,
        loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 0 } },
        range: [0, 0],
        body: [],
        tokens: [],
        comments: [],
        // Used only by eslint-plugin-markdown-language
        mdCode: code,
      },
      services: {
        // If used together with eslint-plugin-vue, those decllarations make sure that
        // warnings from eslint-plugin-vue are not triggered
        getTemplateBodyTokenStore: () => [],
        defineTemplateBodyVisitor: () => ({}),
      },
    }
  },
}
