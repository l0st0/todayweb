import bcrypt from "bcryptjs";
import { PasswordHash, PasswordMatch } from "./types";

export const passwordHash = async ({ password, hash = 10 }: PasswordHash) => {
  return await bcrypt.hash(password, hash);
};

export const passwordMatch = async ({ password, hash }: PasswordMatch) => {
  if (!password || !hash) return false;
  return await bcrypt.compare(password, hash);
};

export const createRandomString = (lenght: number = 6) =>
  Math.random().toString(36).slice(-lenght);

export const createSlug = (value: string) => {
  const removeSpace = value.trim().split(" ").join("-");
  const normalize = removeSpace
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const lowerC = normalize.toLowerCase();

  return lowerC;
};
