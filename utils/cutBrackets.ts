export const cutBrackets = (text: string) => {
  return text.includes('(') ? text.slice(0, text.indexOf('(')) : text;
};
