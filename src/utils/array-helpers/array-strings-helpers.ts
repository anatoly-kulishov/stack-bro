export const addCommasToStringsInArray = (stringsArray: string[]): string => {
  return stringsArray
    .map((str, i) => {
      const isLastElement = i === stringsArray.length - 1;
      if (isLastElement) {
        return str;
      }
      return `${str}, `;
    })
    .join('');
};
