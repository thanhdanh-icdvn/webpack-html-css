module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
      "react/react-in-jsx-scope": "off",
      "camelcase": "error",
      "quotes": ["error", "single"],
      "no-duplicate-imports": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
}
