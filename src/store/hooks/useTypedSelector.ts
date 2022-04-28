import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootReducerType } from '../reducers';

export const useTypedSelector: TypedUseSelectorHook<RootReducerType> = useSelector;
