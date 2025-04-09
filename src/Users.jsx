import React, { use } from 'react';

const Users = ({fetchUser}) => {
    const users=use(fetchUser);
    console.log(users)
    return (
        
    <div className='card'>
    <h1>Users:{users.length} </h1>


    </div>
    );
};

export default Users;