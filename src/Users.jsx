import React, { use } from 'react';

// import user from "./User";
import User from './User';

const Users = ({fetchUser}) => {
    const users=use(fetchUser);
    console.log(users)
    return (
        
    <div className='card'>
    <h1>Users:{users.length} </h1>
    {
        users.map(user =><User key={user.id} user={user}></User>)
    }


    </div>
    );
};

export default Users;