module.exports = {
    testEnvironment: 'jsdom', 
    roots: ['<rootDir>'],
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], 
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', 
    },
  };
  