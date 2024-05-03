import { filter } from "unist-util-filter";

export function remove(types: any) {
  return transformer;

  function transformer(ast: any) {
    return filter(ast, { cascade: false }, function (node) {
      return types.indexOf(node.type) !== -1;
    });
  }
}
