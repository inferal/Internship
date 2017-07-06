/*
 * Home Work
 *
 * ### Задача 2
 *
 * Создайте страницу-калькулятор.
 * На странице должно быть 4 кнопки(по кнопке на математическую операцию: сложение, вычитание, умножение, деление),
 * 2 поля ввода и элемент для отображения результата.
 * Сделайте так, чтобы в поля ввода разрешалось вводить только цифры.
 */


import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class MyApp extends Component {

    constructor(props){
        super(props);

        this.state = {
            first: "",
            second: "",
            result: ""
        };

        this.firstCount = this.firstCount.bind(this);
        this.secondCount = this.secondCount.bind(this);

        this.plusCount = this.plusCount.bind(this);
        this.minusCount = this.minusCount.bind(this);
        this.multiplyCount = this.multiplyCount.bind(this);
        this.divideCount = this.divideCount.bind(this);
    }

    firstCount(event){
        const re = /^[0-9\b]+$/;
        if(event.target.value === "" || re.test(event.target.value)){
            this.setState({
                first: event.target.value
            });
        }else {
            alert("Введите число");
        }
    }

    secondCount(event){
        const re = /^[0-9\b]+$/;
        if(event.target.value === "" || re.test(event.target.value)){
            this.setState({
                second: event.target.value
            });
        }else {
            alert("Введите число");
        }
    }

    plusCount(){
        if(!!this.state.first === false || !!this.state.second === false){
            alert("Одно из полей пустое")
        }else {
            this.setState({ result: +this.state.first + +this.state.second });
            this.setState({ first: (this.state.first = "")});
            this.setState({ second: (this.state.second = "")});
        }
    }

    minusCount(){
        if(!!this.state.first === false || !!this.state.second === false){
            alert("Одно из полей пустое")
        }else{
            this.setState({ result: this.state.first - this.state.second });
            this.setState({ first: (this.state.first = "")});
            this.setState({ second: (this.state.second = "")});
        }
    }

    multiplyCount(){
        if(!!this.state.first === false || !!this.state.second === false){
            alert("Одно из полей пустое")
        }else{
            this.setState({ result: this.state.first * this.state.second });
            this.setState({ first: (this.state.first = "")});
            this.setState({ second: (this.state.second = "")});
        }
    }

    divideCount(){
        if (!!this.state.second === "0"){
            alert("Делить на ноль нельзя");
            this.setState({ result: this.state.first / this.state.second });
            this.setState({ first: (this.state.first = "") });
            this.setState({ second: (this.state.second = "") });
        }else {
            this.setState({ result: this.state.first / this.state.second });
            this.setState({ first: (this.state.first = "")});
            this.setState({ second: (this.state.second = "")});
        }
    }


    render() {

        return (
            <div>
                <h1>Калькулятор</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Первое число"
                        value={this.state.first}
                        onChange={this.firstCount}
                    />
                    <input
                        type="text"
                        placeholder="Второе число"
                        value={this.state.second}
                        onChange={this.secondCount}
                    />
                </div>
                <br/>
                <div>
                    <button onClick={this.plusCount}>+</button>
                    <button onClick={this.minusCount}>-</button>
                    <button onClick={this.multiplyCount}>*</button>
                    <button onClick={this.divideCount}>/</button>
                </div>
                <h1>Результат: {this.state.result}</h1>
            </div>

        )
    }
}


ReactDOM.render(
    <MyApp/>, document.getElementById("example"));