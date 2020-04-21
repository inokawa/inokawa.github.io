"use strict";

var uuFilter = require("unist-util-filter");
var uuParents = require("unist-util-parents");

module.exports = filter;

function filter() {
  return transformer;

  function transformer(ast) {
    ast = uuParents(ast);
    var newAst = uuFilter(
      ast,
      { cascade: false },
      (node) => is(node) || is(node.parent)
    );

    return newAst;
  }

  function is(node) {
    return node.type === "root" || node.type === "heading";
  }
}
