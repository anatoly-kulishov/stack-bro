import {userFollow} from "./usersActions";

test('', () => {
    const thunk = userFollow(1);
    // @ts-ignore
    thunk(() => null);


})
