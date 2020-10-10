"use strict";

var visit = require("unist-util-visit");
const monaco = require("monaco-editor-node");
var u = require("unist-builder");
var raw = require("hast-util-raw");

export function colorize() {
  return transformer;

  async function transformer(ast, file, next) {
    const nodes = [];
    visit(ast, "element", (node, index, parent) => {
      var props = node.properties;
      if (!parent || parent.tagName !== "pre" || node.tagName !== "code") {
        return;
      }
      let className = props.className;
      if (className) {
        className = className[0];
        const lang = className.replace("language-", "");
        if (!lang) return;
        nodes.push({ node, lang });
      }
    });

    for (const n of nodes) {
      const res = await monaco.colorize(n.node.children[0].value, n.lang);
      n.node.children[0] = raw(u("raw", res));
    }
    next();
  }
}
