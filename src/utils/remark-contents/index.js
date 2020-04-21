"use strict";

var uuFilter = require("unist-util-filter");
var uuParents = require("unist-util-parents");
var toc = require("mdast-util-toc");

module.exports = filter;

function filter() {
  return transformer;
}

function transformer(ast) {
  ast = uuParents(ast);
  var newAst = uuFilter(
    ast,
    { cascade: false },
    (node) => is(node) || (node.type === "text" && is(node.parent))
  );
  var t = toc(newAst);
  return t.map;
}

function is(node) {
  return node.type === "root" || node.type === "heading";
}
