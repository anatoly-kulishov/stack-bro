import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useMemo } from 'react';

import { actionCreators } from '../index';

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return bindActionCreators(actionCreators as any, dispatch);
  }, [dispatch]);
};
