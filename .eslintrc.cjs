module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "react/no-unescaped-entities": "off",
  },
  plugins: [],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
