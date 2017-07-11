import React, { Component } from 'react';

import users from '../src/usersData.js';

class tableView extends Component {

    render(){
        return(
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(function (el, i) {
                            return(
                                <tr key={i}>
                                    <td>{el.first_name}</td>
                                    <td>{el.last_name}</td>
                                    <td>{el.gender}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default tableView;