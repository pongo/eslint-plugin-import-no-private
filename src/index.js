"use strict";

module.exports.rules = {
  "no-private": require("./no-private"),
};

module.exports.configs = {
  recommended: {
    rules: {
      "import-no-private/no-private": "error",
    },
  },
};
