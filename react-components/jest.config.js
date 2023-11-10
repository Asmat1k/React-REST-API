module.exports = {
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', '#src'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/#src/**/*.ts',
    '**/#src/**/*.js',
    '!**/node_modules/**',
  ],
  testEnvironment: 'jest-environment-jsdom',
};
