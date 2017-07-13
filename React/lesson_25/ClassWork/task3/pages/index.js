/*
 * Class Work
 *
 * ### Задача 2
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
            num1: '',
            num2: '',
            result: 'Еще нет',
            err: 'Ошибка: введите только цифры в полях'
        };

        this.firstValueTake = this.firstValueTake.bind(this);
        this.secondValueTake = this.secondValueTake.bind(this);

        this.divideChecker = this.divideChecker.bind(this);
        this.plusChecker = this.plusChecker.bind(this);
        this.minusChecker = this.minusChecker.bind(this);
        this.multiChecker = this.multiChecker.bind(this);
    }

    componentWillMount() {
        appStore.on('plus', () => {
            appStore.plusFunc(Number(this.state.num1), Number(this.state.num2));
            this.setState({result: isNaN(appStore.getResult()) ? this.state.err : appStore.getResult})
        });

        appStore.on('minus', () => {
            appStore.minusFunc(Number(this.state.num1), Number(this.state.num2));
            this.setState({result: isNaN(appStore.getResult()) ? this.state.err : appStore.getResult})
        });

        appStore.on('multi', () => {
            appStore.multiFunc(Number(this.state.num1), Number(this.state.num2));
            this.setState({result: isNaN(appStore.getResult()) ? this.state.err : appStore.getResult})
        });

        appStore.on('divide', () => {
            appStore.divideFunc(Number(this.state.num1), Number(this.state.num2) ? Number(this.state.num2) : "Error");
            this.setState({result: isNaN(appStore.getResult()) ? this.state.err : appStore.getResult})
        })
    }

    firstValueTake(event){
        this.setState({
            num1: event.currentTarget.value
        });
    }

    secondValueTake(event){
        this.setState({
            num2: event.currentTarget.value
        });
    }

    divideChecker(event){
        if(this.state.num1 =='' || this.state.num2 == ''){
            event.preventDefault();
            this.setState({ result: "Fields must be fielded" })
            return
        }
        if(!(Number(this.state.num2)) && !(isNaN(this.state.num2))){
            event.preventDefault();
            this.setState({ result: "Divide by 0" })
            return
        }
        appActions.divideWorker()
    }

    multiChecker(event){
        if(this.state.num1 =='' || this.state.num2 == ''){
            event.preventDefault();
            this.setState({ result: "Fields must be fielded" })
            return
        }
        appActions.multiWorker()
    }
    minusChecker(event){
        if(this.state.num1 =='' || this.state.num2 == ''){
            event.preventDefault();
            this.setState({ result: "Fields must be fielded" })
            return
        }
        appActions.minusWorker()
    }
    plusChecker(event){
        if(this.state.num1 =='' || this.state.num2 == ''){
            event.preventDefault();
            this.setState({ result: "Fields must be fielded" })
            return
        }
        appActions.plusWorker()
    }

    render(){
        return(
            <div className="panel well">
                <input type="text" onChange={this.firstValueTake}/>
                <input type="text" onChange={this.secondValueTake}/>
                <p>{this.state.result}</p>
                <input type="button" value='  +  ' onClick={this.plusChecker}/>
                <input type="button" value='  -  ' onClick={this.minusChecker}/>
                <input type="button" value='  *  ' onClick={this.multiChecker}/>
                <input type="button" value='  /  ' onClick={this.divideChecker}/>
            </div>
        )
    }
}

module.exports = App;