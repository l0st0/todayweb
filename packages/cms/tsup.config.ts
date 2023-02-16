import type { Options } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

export const tsup: Options = {
  clean: true, // clean up the dist folder
  dts: true, // generate dts files
  format: ["esm", "cjs"], // generate cjs and esm files
  outDir: "dist",
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  minify: isProduction,
  splitting: isProduction,
};
