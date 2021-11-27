const catchAllUnhandledErrors = (reason: PromiseRejectionEvent) => {
  window.alert('Some error occurred');
  console.log(reason);
}

export {
  catchAllUnhandledErrors
}
