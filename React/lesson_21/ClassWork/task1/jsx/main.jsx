/*
 * Class Work
 *
 * ### Задача 1
 *
 * Создайте React компонент, отображающий кнопку и элемент div.
 * Добавьте на страницу тег style с двумя классами – black и red, задающими соответствующий background-color элементу.
 * Реализуйте переключение этих классов для элемента div при клике по кнопке.
 */


import React from 'react';
import ReactDOM from 'react-dom';


class MyApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {myStyle: props.myStyle || true};
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
        if(this.state.myStyle === true){
            this.setState({myStyle: false})
        }else{
            this.setState({myStyle: true});
        }
    }


    render() {
        return (
            <div className={this.state.myStyle === true ? "red" : "blue"}>
                <button onClick={this.handleClick}>Submit Style</button>
            </div>
        );
    }
}

ReactDOM.render(
    <MyApp />,
    document.getElementById("example"));