import profileReducer from "./profileReducer";
import {addPost, removePost} from "../../actions/profileActions";

let state = {
    posts: [
        {id: 1, message: 'Hello World!', likesCount: 1},
        {id: 2, message: 'Just Text...', likesCount: 2}
    ]
}

it('length of posts should be incremented', () => {
    // 1. Test data
    let action = addPost({
        id: 3,
        message: 'Unit test',
        likesCount: 0
    });

    // 2. Action
    // @ts-ignore
    let newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.posts.length).toBe(3);
})


it('after deleting length of posts should be decrement', () => {
    // 1. Test data
    let action = removePost(1);

    // 2. Action
    // @ts-ignore
    let newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.posts.length).toBe(1);
})

it('after deleting length of posts should`be decrement if id is incorrect', () => {
    // 1. Test data
    let action = removePost(100);

    // 2. Action
    // @ts-ignore
    let newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.posts.length).toBe(2);
})
