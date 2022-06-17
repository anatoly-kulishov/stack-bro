export const mock = () => {};
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: (query: any) => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: mock, // deprecated
      removeListener: mock, // deprecated
      addEventListener: mock,
      removeEventListener: mock,
      dispatchEvent: mock,
    };
  },
});
