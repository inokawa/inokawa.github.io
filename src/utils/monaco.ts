import * as monacoNode from "monaco-editor-node";

export const colorizeElement = (elem: HTMLElement): Promise<void> => {
  return monacoNode.colorizeElement(elem, {});
};

export const colorize = (text: string, languageId: string): Promise<string> => {
  return monacoNode.colorize(text, languageId, {});
};

export const getCss = (): string => {
  return monacoNode.getColorizeCss("vs-dark");
};

export const getBackgroundColor = (): string => {
  return monacoNode.getBackgroundColor("vs-dark");
};