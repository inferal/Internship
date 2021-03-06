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

var users = [
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
    constructor(props) {
        super(props);

        this.state = {
            items: users
        }
    }

    handlerLimit(event){
        var searchQuery = event.target.value;
        var limitedItems = users.slice(0, searchQuery);
        this.setState({
            items: limitedItems
        })
    }

    handlerKey(event){
        if((event.keyCode < 48 || event.keyCode > 57) && event.keyCode !== 8){
            event.preventDefault()
        }
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.handlerLimit.bind(this)} onKeyDown={this.handlerKey.bind(this)}/><br/>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Gender</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            {this.state.items.map((item, key) => {
                                return <Chaild key={key} name={item.name} />
                            })}
                        </td>
                        <td>
                            {this.state.items.map((item, key) => {
                                return <Chaild key={key} gender={item.gender} />
                            })}
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>

        )
    }
}

class Chaild extends React.Component{

    constructor(props) {
        super(props);

        this.state = {}
    }
    render(){
        return(
            <li style={{listStyleType:'none'}} key={this.props.index}>{this.props.name}{this.props.gender}</li>
        )
    }
}


/*class TableRow extends React.Component {
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

 /*{
 users.map((item, key) => {
 return(
 <tr key={key}>
 <td>{ item.name }</td>
 <td>{ item.gender }</td>
 </tr>
 );
 })
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
}*/

ReactDOM.render(
    <Parent/> ,
    document.getElementById("example"));