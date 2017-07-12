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

var styleStore = require('../Stores/styleStore');
var appActions = require('../actions/appActions');

class App extends Component{

    constructor() {
        super()

        this.state = {
            cls: styleStore.cls
        }
        this.styleChangeHandler = this.styleChangeHandler.bind(this);

    }

    componentWillMount() {
        styleStore.on('styleChange', () => {
            this.setState({ cls: styleStore.changeStyle(this.state.cls) })
        })
    }

    styleChangeHandler() {
        appActions.changeStyle();
    }

    render(){
        return(
            <div className={this.state.cls}>
                <button className="btn-md btn-info btn" onClick={this.styleChangeHandler}>Change Style!</button>
            </div>
        )
    }
}

module.exports = App;