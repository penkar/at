module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-plusplus": 0,
        "object-curly-newline": 0,
        "one-var": 0,
        "one-var-declaration-per-line": 0,
        "operator-linebreak": 0,
        "max-len": 0,
        "react/jsx-props-no-spreading": 0,
    },
    "parser": 'babel-eslint',
};
