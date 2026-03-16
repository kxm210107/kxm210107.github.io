import '@testing-library/jest-dom'

// IntersectionObserver is not available in jsdom
global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}
