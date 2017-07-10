/*
 * Home Work
 *
 * ### Задача 1
 *
 * Создайте приложение usersList, которое состоит из 2х компонентов: с
 * писок элементов массива users в виде таблицы и
 * кнопка для добавления новых пользователей в список.
 * Для сборки приложения используйте Webpack.
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