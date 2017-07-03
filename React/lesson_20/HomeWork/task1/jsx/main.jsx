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

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const users = [
    {name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}
];

class Parent extends Component{
    render(){
        return(
            <input type="number" max="8" min="0" placeholder="Введите число"/>
        )
    }
}

class Chaild extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items: "users"
        }
    }
}


class TableRow extends React.Component {
    render() {

        const {data} = this.props;

        const row = data.map((data, i) =>
            <tr key={i}>
                <td key={data.name}>{data.name}</td>
                <td key={data.gender}>{data.gender}</td>
            </tr>

        );
        return (
            <tbody>{row}</tbody>

        );
    }
}

class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <table>
                    <TableRow data={this.props.data} />
                </table>
            </div>

        );
    }
}

ReactDOM.render(
    <Parent/>,
    document.getElementById("example"));