import { actions, userFollow, userUnfollow } from './usersActions';
import { APIResponseType, ResultCodes } from '../../../types';
import usersAPI from '../../../api/usersAPI';

jest.mock('../../../api/usersAPI');
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
  userAPIMock.postUserFollow.mockClear();
  userAPIMock.deleteUserUnfollow.mockClear();
});

const result: APIResponseType = {
  resultCode: ResultCodes.Success,
  messages: [],
  data: {},
};

userAPIMock.postUserFollow.mockReturnValue(Promise.resolve(result));
userAPIMock.deleteUserUnfollow.mockReturnValue(Promise.resolve(result));

test('success follow thunk', async () => {
  const thunk = userFollow(1);

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, userFollow(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1));
});

test('success unfollow thunk', async () => {
  const thunk = userUnfollow(1);

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, userUnfollow(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1));
});
