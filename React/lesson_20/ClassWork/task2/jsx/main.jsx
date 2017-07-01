/*
 * Class Work
 *
 * ### Задача 2
 *
 * Создайте React компонент,
 * который имеет два свойства(props) типа number и свойство mode типа boolean.
 * В зависимости от значения свойства mode(true/false)
 * компонент должен выводить на экран либо сумму свойств типа number,
 * либо результат их конкатенации.
 * */

import React from 'react';
import ReactDOM from 'react-dom';


class MyApp extends React.Component {

    static get defaultProps(){
        return{
            nubmer1: '30',
            number2: '70',
            mode: true
        }
    }
    render(){
        return(
            <div>Первый проп номер {this.props.nubmer1},
                Второй проп номер {this.props.number2}.<br />
                {this.props.mode ? "Mode True: " + (+this.props.nubmer1 + +this.props.number2) : "Mode False: " + (this.props.nubmer1.toString() + this.props.number2.toString())}
            </div>
        )
    }
}



ReactDOM.render(
    <div>
        <MyApp mode={true}/>
        <MyApp mode={false}/>
    </div>,
    document.getElementById("example"));