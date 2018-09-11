module.exports = {
    "extends": [
        "airbnb",
        "react-app"
    ],
    "plugins": [
        "react",
        "import",
        "jsx-a11y",
    ],
    "rules": {
        "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
        "implicit-arrow-linebreak": [
            0,
            "beside",
        ],
        "jsx-a11y/href-no-hash": [0],
        "react/jsx-filename-extension" : 0,
    },
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true,
        "jest": true
    },
};