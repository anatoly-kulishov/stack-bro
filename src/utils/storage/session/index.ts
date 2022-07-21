export const getSessionStorage = (name: string) => {
  if (typeof sessionStorage !== 'undefined') {
    const ls = sessionStorage.getItem(name);
    return ls ? JSON.parse(ls) : null;
  }
  return null;
};
