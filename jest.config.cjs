module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|ts)$': ['@swc/jest']
  }
};
