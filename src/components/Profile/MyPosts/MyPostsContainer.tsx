import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPost} from "../../../store/actions/profileActions";

const mapStateToProps = (state: any) => ({
    posts: state.profile.posts
})

const mapToDispatchToProps = (dispatch: Function) => ({
    onAddPost: (message: string) => {
        const post = {
            id: Date.now(),
            message,
            likesCount: 0
        }
        dispatch(addPost(post));
    }
})

const MyPostsContainer = connect(mapStateToProps, mapToDispatchToProps)(MyPosts);

export default MyPostsContainer;