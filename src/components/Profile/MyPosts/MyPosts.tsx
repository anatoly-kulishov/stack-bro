import React from 'react';
import Post from "./Post";

const MyPosts: React.FC = () => {
    return (
        <div>
            my posts
            <div>
                <button className="btn btn--light-green">New Post</button>
            </div>
            <div>
                <Post title="Post 1"/>
                <Post title="Post 2"/>
            </div>
        </div>
    );
}

export default MyPosts;
