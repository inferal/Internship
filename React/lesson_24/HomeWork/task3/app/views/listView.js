import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import users from '../src/usersData.js';


class listView extends Component{



    render(){
        return(
            <div>
                {
                    users.map(function (el, i) {
                        return(
                            <ul key={i} className="animate">
                                <li><Link to={{pathname: `/listView/${el.id}`}}>{el.first_name} {el.last_name}</Link></li><br/>
                            </ul>

                        )
                    })
                }


            </div>
        )
    }
}

export default listView;