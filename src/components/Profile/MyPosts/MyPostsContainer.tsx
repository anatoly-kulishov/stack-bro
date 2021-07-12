import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {actions} from "../../../store/actions/profileActions";
import {AppStateType} from "../../../store/reducers/rootReducer";

const mapStateToProps = (state: AppStateType) => ({
    posts: state.profile.posts,
    profile: state.profile.profile,
})

const mapToDispatchToProps = (dispatch: Function) => ({
    onAddPost: (message: string) => {
        const post = {
            id: Date.now(),
            message,
            likesCount: 0
        }
        dispatch(actions.addPost(post));
    }
})

// @ts-ignore
const MyPostsContainer = connect(mapStateToProps, mapToDispatchToProps)(MyPosts);

export default MyPostsContainer;