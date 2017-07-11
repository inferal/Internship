/*
 * Home Work
 *
 * ### Задача 2
 *
 * Переделайте задание из предыдущей задачи с использованием browserify.
 */




import React, { Component } from 'react';

import ButtonUser from './buttonUser';


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            users: [
                {firstName: "Yurik", lastName: "Pop", id: 1},
                {firstName: "Vasi", lastName: "Popi", id: 2}
            ]
        }
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>ID</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(function (el, i) {
                                return(
                                    <tr key={i}>
                                        <td>{el.firstName}</td>
                                        <td>{el.lastName}</td>
                                        <td>{el.id}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <ButtonUser/>
            </div>
        )
    }
}


export default App;