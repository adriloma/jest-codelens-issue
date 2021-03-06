module.exports = {
    "verbose": true,
    "transform": {
      "^.+\\.js$": "babel-jest"
    },
    moduleDirectories: ["node_modules", "src"],
    testMatch: ['**/*.spec.js']
};
