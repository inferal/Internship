import React, { Component } from 'react';

import users from '../src/usersData.js';


class listView extends Component{



    render(){
        return(
            <div>
                {
                    users.map(function (el, i) {
                        return(
                            <ul key={i}>
                                <li>{el.first_name} {el.last_name}</li><br/>
                            </ul>

                        )
                    })
                }


            </div>
        )
    }
}

export default listView;