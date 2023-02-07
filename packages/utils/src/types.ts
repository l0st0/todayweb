export interface PasswordHash {
  password: string;
  hash?: number;
}

export interface PasswordMatch {
  password?: string | null;
  hash?: string | null;
}
