module.exports = {
  testTimeout: 20000,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/constants/**",
    "!**/lib/**",
    "!**/.next/**",
    "!**/reusables/**",
    "!**/__mock__/**",
    "!**/coverage/**",
    "!**/**/emotioncache/**",
    "!**/**/theme/**",
    "!**/pages/api/**",
    "!**/pages/_document.tsx",
    "!**/components/sections/slots/Staff.tsx",
    "!**/components/sections/slots/Staffer.tsx",
    "!**/pages/_app.tsx",
    "!**/redux/store/**",
    "!**/jest.config.js",
    "!**/__test__/createClientRender.tsx",
    "!**/__test__/LocalizationProvider.tsx",
    "!**/__test__/test-utils.tsx",
    "!**/__test__/**",
    "!**/next.config.js",
    "!**/gqlData.ts",
    "!**/slotsData.ts",
    "!**/tokenData.tsx",
    "!**/tokens.tsx",
    "!**/public/**",
    "!**/testdata/**",

  ],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    //  https://jestjs.io/docs/webpack#mocking-css-modules

    "\\.(css|sass)$": "identity-obj-proxy",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/cypress/",
  ],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  testEnvironment: "jsdom",
};