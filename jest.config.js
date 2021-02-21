module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/docs-mfe/"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/testing/",
    "/webpack/",
    "/.ragu-components/",
  ],
  transformIgnorePatterns: ['(.*)\.jsx$'],
  testTimeout: 30000,
};
