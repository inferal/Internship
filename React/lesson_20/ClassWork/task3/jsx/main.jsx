/*
 * Class Work
 *
 * ### Задача 3
 *
 * Создайте React компонент, который содержит checkbox и элемент div.
 * При клике по checkbox элементу div присваиваиваются новые стили (выбор стиля призвольный).
 * */

import React from 'react';
import ReactDOM from 'react-dom';


class MyApp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            checked: false
        };
        this.handler = this.handler.bind(this);
    }

    handler(){
        this.setState({checked: !this.state.checked})
    }

    render(){
        return(
            <div className={this.state.checked ? "myClass" : "otherClass"}>
                This is MyApp conponent <br />
                <input type="checkbox" checked={this.state.checked} onChange={this.handler}/>
            </div>
        )
    }
}



ReactDOM.render(
        <MyApp/>,
    document.getElementById("example"));