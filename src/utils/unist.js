"use strict";

var uuFilter = require("unist-util-filter");

export function remove(types) {
  return transformer;

  function transformer(ast) {
    return uuFilter(ast, { cascade: false }, function (node) {
      return types.indexOf(node.type) !== -1;
    });
  }
}
