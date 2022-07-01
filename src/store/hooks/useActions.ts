import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useMemo } from 'react';

import { actionCreators } from '../index';

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actionCreators as any, dispatch);
  }, [dispatch]);
};
