/*
 * Home Work
 *
 * ### Задача 3
 *
 * Добавьте на страницу checkbox, клик по которому
 * будет переключать режим отображения данных массива users между таблицей и списком
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

function getRandomColor() {
    var h = Math.floor(Math.random() * (255 - 1) + 1);
    var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
    var l = '50%';
    var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
    return randomColor;
}

var randomColor = null;

class Parent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            items: users
        }

    }

    componentWillUpdate() {
        randomColor = getRandomColor()
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
                <label>
                    Поменять вид талицы на списком.
                    <input type="checkbox"/>
                </label>
                <table style={{display: this.state.checked ? 'none' : 'block'}}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Gender</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{ color: getRandomColor() }}>
                            {this.state.items.map((item, key) => {
                                return <Chaild key={key} name={item.name} />
                            })}
                        </td>
                        <td style={{ color: getRandomColor() }}>
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

class tableList extends Component{
    render(){
        return(
            <ul style={{display: this.state.checked ? 'block' : 'none'}}>
                <li>
                    {this.state.items.map((item, key) => {
                        return <Chaild key={key} name={item.name} />
                    })}
                </li>
                <li>
                    {this.state.items.map((item, key) => {
                        return <Chaild key={key} gender={item.gender} />
                    })}
                </li>
            </ul>
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


ReactDOM.render(
    <Parent/> ,
    document.getElementById("example"));