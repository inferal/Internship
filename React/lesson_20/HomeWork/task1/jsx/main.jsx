/*
 * Home Work
 *
 * ### Задача 1
 *
 * Создайте 2 React компонента – родительские компонент,
 * содержащий поле ввода и дочерний компонент,
 * содержащий список элементов массива users:
 *
 * var users = [{name:"Anne Montgomery",gender:"Female"},
 * {name:"Annie George",gender:"Female"},
 * {name:"Gary Butler",gender:"Male"},
 * {name:"Lisa Mendoza",gender:"Female"},
 * {name:"Marilyn Henry",gender:"Female"},
 * {name:"Johnny Tucker",gender:"Male"},
 * {name:"Chris Jacobs",gender:"Male"},
 * {name:"Benjamin James",gender:"Male"}]
 *
 * Реализуйте следующее:
 * При вводе числа в поле ввода должно отображаться соответсвующее количество элементов списка.
 */

import React from 'react';
import ReactDOM from 'react-dom';


class Parent extends React.Component {

     static  get defaultProps(){
         return{
             users: [
                 {name:"Anne Montgomery",gender:"Female"},
                 {name:"Annie George",gender:"Female"},
                 {name:"Gary Butler",gender:"Male"},
                 {name:"Lisa Mendoza",gender:"Female"},
                 {name:"Marilyn Henry",gender:"Female"},
                 {name:"Johnny Tucker",gender:"Male"},
                 {name:"Chris Jacobs",gender:"Male"},
                 {name:"Benjamin James",gender:"Male"}
             ]
         }
     }

    render(){
        return(
           <ul>
               {this.props.users.map(function(user, i) {
                   return <Child key={user} name={user.name} gender={user.gender}>1</Child>
               })}
           </ul>
        )
    }
}
class Child extends React.Component{
    render(){
        return(
            <li>{this.props.user};</li>
        )
    }
}


ReactDOM.render(
    <Parent><Child/></Parent>,
    document.getElementById("example"));