import React from 'react';


import users from './usersData.js';


const Info = ({ match }) => {
    const person = match.params.id;
    let indexUser;
    users.forEach(function(item, i) {
        if( item.id == person) {
            return indexUser = i;
        }
    });
    return <div>
        <h1>First name: {users[indexUser].first_name}</h1>
        <h1>Last name: {users[indexUser].last_name}</h1>
        <h1>Gender: {users[indexUser].gender}</h1>
        <h1>E-mail: {users[indexUser].email}</h1>
    </div>

};

export default Info;