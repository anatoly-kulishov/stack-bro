export const convertMongoDate = (date: string) => {
  return new Date(date).toLocaleDateString('ru');
};
