import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import users from '../src/usersData.js';

class tableView extends Component {

    render(){
        return(
            <div>
                <table className="animate">
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
                                    <th><Link to={{ pathname: `/tableView/${el.id}`}}>{el.first_name}</Link></th>
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