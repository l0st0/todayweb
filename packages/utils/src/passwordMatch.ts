import { PasswordMatch } from "./types";
import bcrypt from "bcryptjs";

export const passwordMatch = async ({ password, hash }: PasswordMatch) => {
  if (!password || !hash) return false;
  return await bcrypt.compare(password, hash);
};
