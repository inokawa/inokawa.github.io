"use strict";

var uuFilter = require("unist-util-filter");
var uuParents = require("unist-util-parents");
var toc = require("mdast-util-toc");

module.exports = filter;

function filter() {
  return transformer;
}

function transformer(ast) {
  var root = ast;
  ast = uuParents(ast);
  var newAst = uuFilter(ast, { cascade: false }, function (node) {
    return is(node) || (node.type === "text" && is(node.parent));
  });
  if (!newAst || newAst.children.length === 0) {
    return Object.assign({}, root, { children: [] });
  }
  var t = toc(newAst);
  return Object.assign({}, root, { children: [t.map] });
}

function is(node) {
  return node.type === "root" || node.type === "heading";
}
