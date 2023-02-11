import bcrypt from "bcryptjs";
import { PasswordHash } from "./types";

export const passwordHash = async ({ password, hash = 10 }: PasswordHash) => {
  return await bcrypt.hash(password, hash);
};
