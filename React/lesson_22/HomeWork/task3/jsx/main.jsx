/*
 * Home Work
 *
 * ### Задача 3
 *
 * Создайте React компонент(используя ES6 синтаксис),
 * который выведет на экран в виде таблицы массив users из предыдущей задачи.
 * При клике по каждой ячейке таблицы, содержащей имя плоьзователя,
 * должен запускаться метод sayHi соотстветствующего элемента массива users.
 */


import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Person{
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male"){
            this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.gender = gender
    }

    fullName(){
        return this.firstName + ' ' + this.lastName;
    }

    sayHi(el){
        if(el){
            return alert("Hello, my name is " + el.fullName());
        }else {
            return "Hello, my name is " + this.fullName();
        }

    }
}
/*
const person = new Person();
console.log(person.sayHi());
*/

class User extends Person{
    constructor(firstName, lastName, age, gender, signUpDate = 0, id){
        super(firstName, lastName, age, gender);
        this.signUpDate = signUpDate;
        this.id = id;
    }
}

var user1, user2, user3;

const users = [
    user1 = new User('Yurik', 'Pop', 15, 'Male', (new Date()), 1),
    user2 = new User('Vas', 'Poli', 20, 'Male', (new Date()), 2),
    user3 = new User('Vik', 'Rok', 35, 'Male', (new Date()),  3)

];
/*
console.log(users);
*/

class TableUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: users
        }
    }

    render(){
        return(
            <table cellSpacing="0">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Date</th>
                    <th>Id</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.users.map(function (el) {
                        return(
                            <tr key={el.id}>
                                <td onClick={el.sayHi.bind(null, el)}>{el.firstName}</td>
                                <td>{el.lastName}</td>
                                <td>{el.age}</td>
                                <td>{el.gender}</td>
                                <td>{el.signUpDate.toString()}</td>
                                <td>{el.id}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }
}

ReactDOM.render(
    <TableUser/>,
    document.getElementById('example')
);