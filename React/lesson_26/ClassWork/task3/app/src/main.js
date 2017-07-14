/*
*   Class Work
*
*   Задача 2
*
*   Модифицируйте код предыдущей задачи так, чтобы загрузка массива users происходила асинхронно.
*   Файл с данными в формате JSON находится в папке Classwork.
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