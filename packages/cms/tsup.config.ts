import type { Options } from "tsup";

export const tsup: Options = {
  format: ["cjs", "esm"],
  entryPoints: ["src/index.ts"],
  splitting: true,
  clean: true,
  dts: true,
  minify: true,
  treeshake: true,
};
