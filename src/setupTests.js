import '@testing-library/jest-dom';
// setupTests.js or about.test.jsx before tests
global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  