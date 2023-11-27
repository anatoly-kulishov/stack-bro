import React, { Suspense } from 'react';

export function withSuspense(WrappedComponent: React.ComponentType) {
  return (props: any) => {
    return (
      <Suspense fallback={<div />}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
}
