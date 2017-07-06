/*
 * Class Work
 *
 * ### Задача 1
 *
 * Дано следующий объект:
 * let options = {
 * title: "Menu",
 * width: 100,
 * height: 200
 * };
 * Используя деструктуризацию, присвойте свойства объекта options переменным с соответствующими именами и выведите их на экран.
 */


import React from 'react';
import ReactDOM from 'react-dom';

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title: tit,
    width: wid,
    height: hei
} = options;

class MyApp extends React.Component {



    render() {
        return (
            <div>
                <h1>Title {tit}</h1>
                <h3>Width {wid}</h3>
                <h3>Height {hei}</h3>
            </div>
        );
    }
}

ReactDOM.render(
    <MyApp />,
    document.getElementById("example"));