/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/styles.ts", "!src/**/*.d.ts", "!src/global.ts", "!src/App.tsx", "!src/main.tsx"],
  coverageThreshold: {
    global: {
      lines: 90
    }
  },
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  /* moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/config/__mocks__/fileMock.js',
  } */
};

export default config;
