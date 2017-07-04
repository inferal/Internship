/*
 * Class Work
 *
 * ### Задача 2
 *
 * Модифицируйте код предыдущей задачи.
 * Добавьте на странцу три кнопки:
 * сбросить счет (reset), start и stop,
 * которые предоставя пользователю останавлтвать/возобновлять работу таймера
 * и сбрасывать отсчитанное время.
 */


import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class MyApp extends Component {

    constructor(props){
        super(props);
        this.state = {counter : 1};
        this.count = this.count.bind(this);

    }

    count(){
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        if(!this.timer){
            this.timer = setInterval(this.count, 1000);
        }
        return (
            <div>
                <h1>Counter :  { this.state.counter } sec.</h1>
            </div>
        );
    }
}

class MyButton extends Component{

    render(){
        return(
            <div>
                <button>Reset</button>
                <button>Start</button>
                <button>Stop</button>
            </div>
        )
    }
}

ReactDOM.render(
    <MyApp/>, document.getElementById("example"));