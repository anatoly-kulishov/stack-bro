import React, { ComponentType, Suspense } from 'react';

export function withSuspense<WCP>(WrappedComponent: ComponentType<WCP>) {
  return (props: WCP) => {
    return (
      <Suspense fallback={<div />}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
}
