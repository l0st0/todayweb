import type { Options } from "tsup";

export const tsup: Options = {
  splitting: true,
  clean: true, // clean up the dist folder
  dts: true, // generate dts files
  format: ["esm", "cjs"], // generate cjs and esm files
  minify: true,
  outDir: "dist",
  entry: ["src/**/*.ts", "src/**/*.tsx"],
};
