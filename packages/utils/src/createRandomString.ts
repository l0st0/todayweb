export const createRandomString = (lenght: number = 6) =>
  Math.random().toString(36).slice(-lenght);
