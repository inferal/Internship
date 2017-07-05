/*
 * Home Work
 *
 * ### Задача 3
 *
 * Создайте React-компонент, содержащий форму со следующими полями:
 * Name
 * Email
 * Phone number
 * Message
 * Используя обработчики событий,  реализуйте валидацию формы
 */


import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class MyApp extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            message: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    handleEmailChange(event){
        this.setState({
            email: event.target.value
        })
    }

    handleNameChange(event){
        this.setState({
            name: event.target.value
        })
    }

    handlePhoneChange(event){
        const re = /^[0-9\b]+$/;
        if(event.target.value === "" || re.test(event.target.value)) {
            this.setState({
                phone: event.target.value
            })
        }else {
            alert('Введите число');
        }
    }
    handleMessageChange(event){
        this.setState({
            message: event.target.value
        })
    }
    handleSubmit(event){
        alert('Ваше имя: ' + this.state.name + '\n\r'
            + 'Ваша почта: ' + this.state.email + '\n\r'
            + 'Ваш телефон: ' + this.state.phone + '\n\r'
            + 'Ваше сообщение: ' + this.state.message);
        event.preventDefault();
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Форма ввода</h1>
                <div>
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Phone number</label>
                    <input
                        type="tel"
                        placeholder="Phone number"
                        value={this.state.phone}
                        onChange={this.handlePhoneChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <input
                        type="text"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.handleMessageChange}
                    />
                </div>
                <input type="submit" value="submit"/>
            </form>

        )
    }
}


ReactDOM.render(
    <MyApp/>, document.getElementById("example"));