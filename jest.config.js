module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/testing/",
    "/webpack/",
  ],
  transformIgnorePatterns: ['(.*)\.jsx$'],
  testTimeout: 30000,
};
