export const isNumeric = (val: string): boolean => {
  if (!val.length) return false;
  return !Number.isNaN(Number(val));
};
