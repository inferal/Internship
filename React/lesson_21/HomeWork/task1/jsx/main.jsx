/*
 * Home Work
 *
 * ### Задача 1
 *
 * Создайте React компонент-счетчик.
 * Он должен отображать на странице две кнопки (+ и -)
 * и элемент h1 для вывода текущего счета на экран.
 */


import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class MyApp extends Component {

    constructor(props){
        super(props);

        this.state = {
            counter : 0
        };
        this.plusCount = this.plusCount.bind(this);
        this.minusCount = this.minusCount.bind(this);

    }

    plusCount(){
        this.setState({
            counter: this.state.counter + 1
        });
    }

    minusCount(){
        this.setState({
            counter: this.state.counter - 1
        });
    }


    render() {

        return (
            <div>
                <button onClick={() => this.plusCount()}>+</button>
                <h1>{ this.state.counter }</h1>
                <button onClick={() => this.minusCount()}>-</button>

            </div>
        )
    }
}


ReactDOM.render(
    <MyApp/>, document.getElementById("example"));