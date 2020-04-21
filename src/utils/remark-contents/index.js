"use strict";

var uuFilter = require("unist-util-filter");

module.exports = filter;

function filter() {
  return transformer;

  function transformer(ast) {
    var newAst = uuFilter(
      ast,
      { cascade: true },
      (node) => node.type === "root" || node.type === "heading"
    );
    return newAst || ast;
  }
}
