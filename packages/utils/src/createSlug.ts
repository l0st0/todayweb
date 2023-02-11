export const createSlug = (value: string) => {
  const removeSpace = value.trim().split(" ").join("-");
  const normalize = removeSpace
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const lowerC = normalize.toLowerCase();

  return lowerC;
};
