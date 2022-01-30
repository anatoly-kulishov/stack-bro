import profileReducer from './profileReducer';
import { profileActions } from '../../actions/profileActions';
import { Nullable, ProfileType } from '../../../types';

const state = {
  isOwner: true,
  isLoading: true,
  isValid: true,
  error: null,
  posts: [
    { id: 1, message: 'Hello World!', likesCount: 1 },
    { id: 2, message: 'Just Text...', likesCount: 2 },
  ] as object[],
  selectedProfile: {},
  ownerProfile: {} as ProfileType,
  profile: {} as ProfileType,
  status: '',
  followStatus: null as Nullable<boolean>,
};

it('length of posts should be incremented', () => {
  // 1. Test data
  const action = profileActions.addPost({
    id: 3,
    message: 'Unit test',
    likesCount: 0,
  });

  // 2. Action
  const newState = profileReducer(state, action);

  // 3. Expectation
  expect(newState.posts.length).toBe(3);
});

it('after decongesting length of posts should be decrement', () => {
  // 1. Test data
  const action = profileActions.removePost(1);

  // 2. Action
  const newState = profileReducer(state, action);

  // 3. Expectation
  expect(newState.posts.length).toBe(1);
});

it('after decongesting length of posts should`be decrement if id is incorrect', () => {
  // 1. Test data
  const action = profileActions.removePost(100);

  // 2. Action
  const newState = profileReducer(state, action);

  // 3. Expectation
  expect(newState.posts.length).toBe(2);
});
