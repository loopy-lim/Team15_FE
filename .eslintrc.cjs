module.exports = {
  root: true,
  env: { browser: true, es6: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "android",
    "ios",
    "node_modules",
    "capacitor.config.json",
    "ionic.config.json",
    "tailwind.config.js",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
