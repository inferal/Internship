/*
 * Home Work
 *
 * ### Задача 3
 *
 * Создайте React компонент, который отображает на странице произвольный текст.
 * Компонент должен иметь такие свойства: color и fontSize.
 * Установите на основе этих свойств стили для компонента.
 */


import React from 'react';
import ReactDOM from 'react-dom';


class MyText extends React.Component {

    render() {
        return (
            <h1 style={{"color": this.props.color, "fontSize": this.props.fontSize}}>Hello, {this.props.name}!</h1>
        );
    }
}

ReactDOM.render(
    <MyText color="red" fontSize="70px" name="My React"/>,
    document.getElementById("example"));