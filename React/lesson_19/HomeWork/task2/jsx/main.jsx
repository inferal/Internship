/*
 * Home Work
 *
 * ### Задача 2
 *
 * Создайте React компонент, который отображает на странице форму с полями ‘name’ , ‘login’ и кнопкой Submit
 */


import React from 'react';
import ReactDOM from 'react-dom';


class MyForm extends React.Component {

    render() {
        return (
            <form>
                <label>Name </label>
                <input type="text" placeholder="name"/>
                <br/><br/>
                <label>Login </label>
                <input type="text" placeholder="login"/>
                <br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

ReactDOM.render(
    <MyForm />,
    document.getElementById("example"));