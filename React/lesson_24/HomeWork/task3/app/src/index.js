/*
 * Home Work
 *
 * ### Задача 3
 *
 * Модицифицируйте код предыдущей задачи. Реализуйте следующее:
 *
 *  * При клике по каждому элементу списка происходит перенаправление на страницу “/tableView/:id” или “/listView/:id”,
 *    в зависимости от текущего пути приложения, где id – соответствующее свойтво id элемента списка или таблицы,
 *    по которому кликнул пользователь
 *  * На странице, на которую будет происходить перенаправление, должна отображаться инфомация
 *    об элементе массива users, id которого был передан в поисковой строке.
 *    Реализуйте передачу этой информации через query параметры.
 */




import React, { Component } from 'react';

import { HashRouter, Route, Link, Switch} from 'react-router-dom';


import listView from '../views/listView.js';
import tableView from '../views/tableView.js';
import Info from './info.js'


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
                        <Route exact path="/listView" component={listView}/>
                        <Route path="/listView/:id" component={Info}/>
                        <Route exact path="/tableView" component={tableView}/>
                        <Route path="/tableView/:id" component={Info}/>
                    </Switch>
                    </div>
            </HashRouter>
        )
    }
}

export default App;