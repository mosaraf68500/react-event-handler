import React, { use } from 'react';

const Friends = ({friendsFetch}) => {

    const friends=use(friendsFetch);
    console.log(friends)
    return (
        
        <div className='card'>
        <h2> friends: {friends.length}</h2>

        </div>
    );
};

export default Friends;