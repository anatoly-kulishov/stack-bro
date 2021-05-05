import React from 'react';
import {connect, useDispatch} from "react-redux";
import styles from './MyPosts.module.scss';
import {addPost} from "../../../store/actions/profileActions";
import Post from "./Post";

type IMyPosts = {
    posts: Array<{
        id: number,
        message: string,
        likeCount: number
    }>
}

const MyPosts: React.FC<IMyPosts> = ({posts}) => {
    const dispatch = useDispatch();
    let postsElements = posts.map(p => <Post key={p.id} message={p.message} likes={p.likeCount}/>);

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const post = {
            id: Date.now(),
            message: form['message'].value,
            likeCount: 0
        }
        dispatch(addPost(post));
        form['message'].value = '';
    }

    return (
        <div className={styles.myPosts}>
            <form className={styles.form}
                  onSubmit={submitHandler}>
                <div className={styles.title}>My posts</div>
                <textarea className={`form-control ${styles.textarea}`}
                          name="message"/>
                <button className="btn btn--light-green"
                        type="submit">Add Post
                </button>
            </form>
            <div className={styles.postWrapper}>
                {postsElements}
            </div>
        </div>
    );
}


const mapStateToProps = (state: any) => {
    return {
        posts: state.profile.posts,
    }
}

export default connect(mapStateToProps, null)(MyPosts);
