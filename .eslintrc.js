module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
    es6: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true }],
    "@typescript-eslint/no-explicit-any": "off",
    "react/no-unescaped-entities": 0,
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/prop-types": 0,
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  parser: "@typescript-eslint/parser"
};
