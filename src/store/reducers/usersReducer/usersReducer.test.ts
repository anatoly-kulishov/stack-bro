import {userFollow, userUnfollow} from "../../actions/usersActions/usersActions";
import usersReducer, {InitialStateType} from "./usersReducer";

let state: InitialStateType;

beforeEach(() => {
    state = {
        isLoading: true,
        pageSize: 12,
        totalUsersCount: 0,
        currentPage: 1,
        users: [
            {
                id: 0,
                name: 'Player 1',
                followed: false,
                photos: {small: null, large: null},
                status: 'status 1'
            },
            {
                id: 1,
                name: 'Player 2',
                followed: false,
                photos: {small: null, large: null},
                status: 'status 2'
            },
            {
                id: 2,
                name: 'Player 3',
                followed: true,
                photos: {small: null, large: null},
                status: 'status 3'
            },
            {
                id: 3,
                name: 'Player 4',
                followed: true,
                photos: {small: null, large: null},
                status: 'status 4'
            },
        ],
        followingInProgress: [],
        filter: {
            term: '',
            friend: null
        }
    }
})

test('follow success', () => {
    const newState = usersReducer(state, userFollow(1))
    console.log(newState.users);

    // Todo: Debug follow and unfollow thunk
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
})

test('unfollow success', () => {
    const newState = usersReducer(state, userUnfollow(3))
    console.log(newState.users);

    // Todo: Debug follow and unfollow thunk
    expect(newState.users[3].followed).toBeFalsy();
    expect(newState.users[4].followed).toBeTruthy();
})
