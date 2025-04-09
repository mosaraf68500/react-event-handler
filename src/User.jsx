import React from 'react';

const User = ({user}) => {
    console.log(user)
    const {name, email, phone}=user;
    return (
        
       <div className='card'>
       <h2>Name:{name}</h2>
       <p>Email:{email}</p>
       <p>phone: {phone}</p>

       </div>
    );
};

export default User;