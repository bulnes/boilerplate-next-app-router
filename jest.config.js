const jestConfig = {
  testEnvironment: 'jsdom', // Browser environment for testing React components
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/.*\\.(config|setup)\\.[cm]?ts?$', // Ignora *.config.* e *.setup.* (js/ts/cjs/mjs/cts/mts)
    '/.*\\.d\\.(ts|js)$' // Ignora arquivos de declaração de tipos (*.d.ts/js)
  ],
  collectCoverage: true, // Enable code coverage collection
  collectCoverageFrom: [
    'src/**/*.ts(x)?', // Collect coverage from all source files
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
