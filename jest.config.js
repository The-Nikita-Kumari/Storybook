/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
  },
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  collectCoverageFrom: [
    "src/components/**/*.{js,jsx}",
    "!src/components/**/index.js",
  ],
};
module.exports = config;
