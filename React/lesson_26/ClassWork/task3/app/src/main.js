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
var App = require('../components/app');


var Provider = require('react-redux').Provider;
var redux = require('redux');
var createStore = redux.createStore;
var combineReducers = redux.combineReducers; // Необходим в случае нескольких редюсеров
var applyMiddleware = redux.applyMiddleware;
var compose = redux.compose;



var thunk = require('redux-thunk').default;
var reducer = require('../reducers/listReducer');
var fetchUsers = require('../actions/index').fetchUsers;




const middleware = applyMiddleware(thunk);

const store = createStore(reducer, compose(middleware));


store.dispatch(fetchUsers()) //загрузка файла


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)