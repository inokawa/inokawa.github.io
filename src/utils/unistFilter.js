"use strict";

var uuFilter = require("unist-util-filter");

module.exports = filter;

function filter(types) {
  return transformer;

  function transformer(ast) {
    return uuFilter(ast, { cascade: false }, function (node) {
      return types.indexOf(node.type) !== -1;
    });
  }
}
