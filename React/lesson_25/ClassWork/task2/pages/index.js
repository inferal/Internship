/*
 * Class Work
 *
 * ### Задача 1
 *
 * Используя flux архитектуру:
 *  *   Создайте страницу-таймер: React компонент, который будет выводить на экран количество секунд,
 *      прошедших с момента ее открытия.
 *  *   Добавьте на страницу три кнопки: start, stop, reset, выполняющие соответствующие функции
 */




import React, { Component } from 'react';

var appStore = require('../stores/appStore');
var appActions = require('../actions/appActions');

class App extends Component{

    constructor() {
        super();

        this.state = {
            interval: '',
            stopDoubleClick: false,
            counter: 0
        };

        this.counterStart = this.counterStart.bind(this);
        this.counterTick = this.counterTick.bind(this);
        this.counterReset = this.counterReset.bind(this);
        this.counterStop = this.counterStop.bind(this);

    }

    componentWillMount() {
        appStore.on('countStart', () => {
            appStore.countFun();
            this.setState({counter: appStore.getInitialCount() })
        })

        appStore.on('countClear', () =>{
            appStore.countClearFun();
            this.setState({ counter: appStore.getInitialCount() })
        })
    }

    componentDidMount(){
        this.counteStart();
    }

    counterStart() {
        if(!this.state.stopDoubleClick) {
            this.setState({interval: setInterval(this.counterTick, 1000), stopDoubleClick: true})
        }
    }

    counterTick(){
        appActions.getStart();
    }

    counterReset() {
        this.setState({
            stopDoubleClick: false
        });
        appActions.getClear();
    }

    counterStop() {
        clearInterval(this.state.interval);
        this.setState({
            stopDoubleClick: false
        });
    }


    render(){
        return(
            <div className="panel well">
                <h1>Counter: {this.state.counter}</h1>
                <button className="btn-md btn-info btn" onClick={this.counterReset}>Reset</button>
                <button className="btn-md btn-info btn" onClick={this.counterStart}>Start</button>
                <button className="btn-md btn-info btn" onClick={this.counterStop}>Stop</button>
            </div>
        )
    }
}

module.exports = App;