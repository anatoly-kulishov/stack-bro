import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {actions} from "../../../store/actions/profileActions";

const mapStateToProps = (state: any) => ({
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

const MyPostsContainer = connect(mapStateToProps, mapToDispatchToProps)(MyPosts);

export default MyPostsContainer;