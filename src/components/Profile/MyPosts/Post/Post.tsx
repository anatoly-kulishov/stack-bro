import React from 'react';

type IPost = {
    title: string
}

const Post: React.FC<IPost> = ({title}) => {
    return (
        <div>
            {title}
        </div>
    );
}

export default Post;