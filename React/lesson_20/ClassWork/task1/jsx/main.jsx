/*
 * Class Work
 *
 * ### Задача 1
 *
 * Создайте React компонент Parent, отображающий на странице произвольный текст в теге h1.
 * Создайте дочерний компонент Child, отображающий произвольный текст в теге h3.
 */


import React from 'react';
import ReactDOM from 'react-dom';


class Parent extends React.Component {

    static get defaultProps() {
        return{
            name: 'Vasya',
        }
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                {this.props.children}
            </div>
        );
    }
}

class Child extends React.Component{

    static get defaultProps() {
        return{
            name: 'Ivan',
        }
    }
    render(){
        return(
            <h3>Hello child {this.props.name}!</h3>
        )
    }
}

ReactDOM.render(
    <div>
        <Parent><Child/></Parent>
    </div>,
    document.getElementById("example"));