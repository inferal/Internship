/*  Задача 3 */

/* Создайте React компонент, который принимает два числа в качестве свойств (props).
Компонент должен выводить на экран сумму своих свойств. */


import React from 'react';
import ReactDOM from 'react-dom';



let sum = { props.one, + +props.two};

class Summa extends React.Component {

    render(){
        return <h1>{sum}</h1>;
    }
}

const element = <Summa one="22" two="+22"/>;

ReactDOM.render(
    element,
    document.getElementById('example')
);