/*
 * Class Work
 *
 * ### Задача 2
 *
 * Используя Promise, асинхронно загрузите на страницу файл image.jpg, находящийся в папке Classwork рядом с файлом с задачами.
 */


import React from 'react';
import ReactDOM from 'react-dom';


class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: "",
            get: './img/image.jpg'
        }
    }
    getImage() {
        let url = this.state.get;
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () {
                return resolve(url);
            }
            img.onerror = function () {
                return reject(alert("Failed to load image"));
            }
            img.src = url;
        }).then(
            this.setState({
                src: url
            })
        );
    }


    render() {
        return (
            <div>
                <button onClick={this.getImage.bind(this)}>Get Image</button>
                <img src={this.state.src} alt="" />
            </div>
        );
    }
}

ReactDOM.render(
    <MyApp />,
    document.getElementById("example"));