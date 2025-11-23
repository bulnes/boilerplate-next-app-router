const jestConfig = {
  testEnvironment: 'jsdom', // Browser environment for testing React components
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true, // Enable code coverage collection
  collectCoverageFrom: [
    'src/**/*.ts(x)?', // Collect coverage from all source files
    '!src/**/stories.ts(x)?', // Collect coverage from all source files
    '!src/app/**', // Exclude app directory
    '!src/styles/**', // Exclude styles directory
    '!src/types/**' // Exclude types directory
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], // Setup file for additional configurations
  modulePaths: ['<rootDir>/src/'], // Root directory for module resolution
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }] // Use babel-jest for transforming files
  }
}

export default jestConfig
