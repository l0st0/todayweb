module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@todayweb/cms"],
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
};
