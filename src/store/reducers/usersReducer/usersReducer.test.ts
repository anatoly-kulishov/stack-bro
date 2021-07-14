import usersReducer, {InitialStateType} from "./usersReducer";
import {userFollow} from "../../actions/usersActions";

test('mock', () => {
    const state: InitialStateType = {
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
        followingInProgress: []
    }

    const newState = usersReducer(state, userFollow(1))

    expect(newState.users[0].followed).toBeFalsy();
    // expect(newState.users[1].followed).toBeTruthy();
})
