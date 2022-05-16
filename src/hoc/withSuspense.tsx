import React, { Suspense } from 'react';

export function withSuspense<WCP>(WrappedComponent: React.ComponentType) {
  return (props: WCP) => {
    return (
      <Suspense fallback={<div />}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
}
