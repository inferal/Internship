/*
 * Home Work
 *
 * ### Задача 1
 *
 * Создайте приложение с тремя страницами:
 *      * главной страницей, соответстующей React компоненту App, содержащему 2 кнопки (ListView, TableView),
 *      реализующие переход по соответственным путям (“/listView”, “tableView”)
 *      * страницей, отображающей массив users в виде списка(listView). Для списка используйте свойства элементов
 *      массива users first_name и last_name
 *      * страницей, отображающей массив users в виде таблицы(tableView). Для 2nf,таблицы используйте свойства
 *      элементов массива users first_name, last_name и gender. Массив users для задачи:
 *
 *
 *      var users = [
 *      {first_name:"Matthew",last_name:"Phillips",email:"mphillips0@myspace.com",gender:"Male",ip_address:"14.241.172.154", id:23468},
 *      {first_name:"Larry",last_name:"Weaver",email:"lweaver1@slideshare.net",gender:"Male",ip_address:"126.139.9.128", id:89078},
 *      {first_name:"Barbara",last_name:"Tucker",email:"btucker2@cbc.ca",gender:"Female",ip_address:"92.195.229.16", id: 56435},
 *      {first_name:"Jonathan",last_name:"Cook",email:"jcook3@fc2.com",gender:"Male",ip_address:"187.79.225.71", id:78908},
 *      {first_name:"Jean",last_name:"Flores",email:"jflores4@last.fm",gender:"Female",ip_address:"222.197.158.249, id:67653"},
 *      {first_name:"Kimberly",last_name:"Nelson",email:"knelson5@nifty.com",gender:"Female",ip_address:"111.174.89.57", id:83425},
 *      {first_name:"Willie",last_name:"Banks",email:"wbanks6@abc.net.au",gender:"Male",ip_address:"97.0.19.154", id:99873},
 *      {first_name:"Michael",last_name:"King",email:"mking7@w3.org",gender:"Male",ip_address:"149.114.62.6"}, id: 34239]
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