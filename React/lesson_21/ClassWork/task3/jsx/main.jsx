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
        this.state = {time : 0};
        this.stopCount = this.stopCount.bind(this);
        this.startCount = this.startCount.bind(this);
        this.resetCount = this.resetCount.bind(this);

    }
    componentDidMount(){
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    tick(){
        this.setState({time: this.state.time + 1})
    }

    startCount(){
        clearInterval(this.timer);
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    stopCount(){
        clearInterval(this.timer);
    }

    resetCount(){
        this.setState({ time: 0 });
    }

    render() {

        return (
            <div>
                <h1>Counter :  { this.state.time } sec.</h1>
                <button onClick={this.resetCount}>Reset</button>
                <button onClick={this.startCount}>Start</button>
                <button onClick={this.stopCount}>Stop</button>
            </div>
        )
    }
}


ReactDOM.render(
    <MyApp/>, document.getElementById("example"));