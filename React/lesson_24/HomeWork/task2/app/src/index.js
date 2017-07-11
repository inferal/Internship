/*
 * Home Work
 *
 * ### Задача 2
 *
 * Модицифицируйте код предыдущей задачи.
 * Добавьте анимацию при переходе по путям, указанным в конфигурации маршрутизации приложения.
 */




import React, { Component } from 'react';

import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom';


import listView from '../views/listView.js';
import tableView from '../views/tableView.js';


class App extends Component{



    render(){
        return(
            <HashRouter>
                    <div  className="panel well">
                        <h1>React Routing</h1>
                        <ul>
                            <l1><Link to="/listView"><button className="btn btn-lg btn-success">ListView</button></Link></l1>
                            <l1><Link to="/tableView"><button className="btn btn-lg btn-success">TableView</button></Link></l1>
                        </ul>


                    <hr/>

                    <Switch>
                        <Route path="/listView" component={listView}/>
                        <Route path="/tableView" component={tableView}/>
                    </Switch>
                    </div>
            </HashRouter>
        )
    }
}

export default App;