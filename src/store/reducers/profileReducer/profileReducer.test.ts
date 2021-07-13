import profileReducer from "./profileReducer";
import {actions} from "../../actions/profileActions";

const state = {
    posts: [
        {id: 1, message: 'Hello World!', likesCount: 1},
        {id: 2, message: 'Just Text...', likesCount: 2}
    ]
}

it('length of posts should be incremented', () => {
    // 1. Test data
    const action = actions.addPost({
        id: 3,
        message: 'Unit test',
        likesCount: 0
    });

    // 2. Action
    // @ts-ignore
    const newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.posts.length).toBe(3);
})


it('after deconsting length of posts should be decrement', () => {
    // 1. Test data
    const action = actions.removePost(1);

    // 2. Action
    // @ts-ignore
    const newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.posts.length).toBe(1);
})

it('after deconsting length of posts should`be decrement if id is incorrect', () => {
    // 1. Test data
    const action = actions.removePost(100);

    // 2. Action
    // @ts-ignore
    const newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.posts.length).toBe(2);
})
