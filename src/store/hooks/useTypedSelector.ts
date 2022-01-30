import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootReducerType } from '../reducers/rootReducer';

export const useTypedSelector: TypedUseSelectorHook<RootReducerType> = useSelector;
