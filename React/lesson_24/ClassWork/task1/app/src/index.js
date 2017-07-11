/*
 * Class Work
 *
 * ### Задача 1
 *
 * Создайте 2 файла с React компонентами, содержащими текст ‘View 1’ и ‘View2’.
 * Создайте файл index.js, в котором выполните настройку маршрутизации
 * для переключения между путями “/view1” и “/view2”.
 */




import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';



import View1 from '../views/view1.js';
import View2 from '../views/view2.js';


class App extends Component{



    render(){
        return(
            <Router>
                <div>
                    <h1>React Routing</h1>
                    <ul>
                        <l1><Link to="/view1">View 1</Link></l1>
                        <l1><Link to="/view2">View 2</Link></l1>
                    </ul>


                <hr/>

                <Switch>
                    <Route path="/view1" component={View1}/>
                    <Route path="/view2" component={View2}/>
                </Switch>
                </div>
            </Router>
        )
    }
}

export default App;