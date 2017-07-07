/*
 * Class Work
 *
 * ### Задача 2
 *
 * Используя синтаксис ES6, создайте React компонент,
 * содержащий кнопку и выводящий на экран при клике по кнопке свои свойства(props) в виде списка.
 */


import React from 'react';
import ReactDOM from 'react-dom';


class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.showProps = this.showProps.bind(this);
    }

    showProps(){
        this.setState({show: !this.state.show});
    }



    render() {
        if(this.state.show){
            return(
                <div>
                    <li>{this.props.title}</li>
                    <li>{this.props.text}</li>
                </div>
            )
        }
        return (
            <div>
                <button onClick={this.showProps}>Shop props</button>
            </div>
        );
    }
}

ReactDOM.render(
    <MyApp title=" Test title" text="Test text"/>,
    document.getElementById("example"));