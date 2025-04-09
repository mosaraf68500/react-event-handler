import React, { use } from 'react';
import Post from './Post';

const Posts = ({PostPromise}) => {
    const posts=use(PostPromise)
    console.log(posts)
    return (
        
        <div className='card'>
            <h1>All posts hare...</h1>
            <h3>total posts:{posts.length}</h3>

            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;