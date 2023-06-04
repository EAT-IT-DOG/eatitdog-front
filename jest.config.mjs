import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  moduleNameMapper: {
    "^assets/(.*)$": "<rootDir>/assets/$1",
    "^components/(.*)$": "<rootDir>/components/$1",
    "^constants/(.*)$": "<rootDir>/constants/$1",
    "^hooks/(.*)$": "<rootDir>/hooks/$1",
    "^libs/(.*)$": "<rootDir>/libs/$1",
    "^pages/(.*)$": "<rootDir>/pages/$1",
    "^queries/(.*)$": "<rootDir>/queries/$1",
    "^repositories/(.*)$": "<rootDir>/repositories/$1",
    "^stores/(.*)$": "<rootDir>/stores/$1",
    "^styles/(.*)$": "<rootDir>/styles/$1",
    "^types/(.*)$": "<rootDir>/types/$1",
    "^utils/(.*)$": "<rootDir>/utils/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(config);
