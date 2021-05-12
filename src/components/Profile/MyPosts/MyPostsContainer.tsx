import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import MyPosts from "./MyPosts";
import {addPost} from "../../../store/actions/profileActions";

const MyPostsContainer: React.FC = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: any) => state.profile.posts);

    const onAddPost = (message: string) => {
        const post = {
            id: Date.now(),
            message,
            likeCount: 0
        }
        dispatch(addPost(post));
    }

    return <MyPosts posts={posts} onAddPost={onAddPost}/>
}

export default MyPostsContainer;