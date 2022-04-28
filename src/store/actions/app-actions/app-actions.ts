import { AppActionType } from '../../action-types';

export interface InitializedSuccess {
  type: AppActionType.INITIALIZED_SUCCESS;
}

export interface InitializedFailed {
  type: AppActionType.INITIALIZED_FAILED;
}

export type AppActions = InitializedSuccess | InitializedFailed;
