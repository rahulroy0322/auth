const config = {
  arrowParens: "always",
  bracketSpacing: true,
  semi: true,
  trailingComma: "es5",
  singleAttributePerLine: true,
  singleQuote:true,
  importOrder: [
    "react$",
    "^[a-zA-Z]",
    "^@(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^./(.*).css"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  parser: "typescript",
  filepath: "./src/*",
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "eslint-plugin-prettier",
    "prettier-plugin-tailwindcss"
  ],
  overrides: [
    {
      files: [
        "**/*.md"
      ],
      options: {
        parser: "markdown"
      }
    },
    {
      files: ['**/*.css'],
      options: {
        parser: "css"
      }
    },
    {
      files: ['**/*.html'],
      options: {
        parser: "html"
      }
    }
  ]
};

export default config;