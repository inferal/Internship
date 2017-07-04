/*
 * Class Work
 *
 * ### Задача 2
 *
 * Создайте страницу-таймер,
 * которая будет отображать количество секунд, прошедшее с момента ее открытия.
 */


import React from 'react';
import ReactDOM from 'react-dom';


class MyApp extends React.Component {

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

ReactDOM.render(
    <MyApp />,
    document.getElementById("example"));