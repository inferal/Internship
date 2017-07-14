/*
*   Class Work
*
*   Задача 2
*
*   Используя Redux, реализуйте следующее:
*
*       *   Создайте React компонент, который содержит кнопку
*       *   Создайте его дочерний компонент, который принимает в
*           качестве свойства массив users и отображает его в виде списка при клике по кнопке первого компонента
*
* */


var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;

var countReducer = require('../reducers/listReducer');
var App = require('../components/app');

let store = createStore(countReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)