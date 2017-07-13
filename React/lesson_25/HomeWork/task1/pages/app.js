/*
 * Home Work
 *
 * ### Задача 1
 *
 * СИспользуя flux архитектуру:
 *  * Создайте приложение todoList. Отображайте данные в виде списка
 *  * Добавьте возможность удалять/добавлять элементы в список
 */




var React = require('react');
var Link = require('react-router').Link;

// импорт хранилища данных (store)
var TodoStore = require('../stores/toDoStore');

// импорт действий toDoActions
var TodoActions = require('../actions/toDoActions');

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: TodoStore.getAll(),
            newName:""
        }
        this.firstValue = this.firstValue.bind(this);
        this.clickHandler = this.clickHandler.bind(this);

    }
    remove(id) {
        TodoActions.removeItem (id);

    }
    firstValue(event){
        this.setState({
            newName: event.currentTarget.value
        });
    }

    clickHandler(){
        var el=document.getElementsByClassName("checkbox")[0];
        let exp=el.checked ?"completed":"not complete"
        if(this.state.newName==""){alert("Please enter the name of the task")}

        else TodoActions.createItem({name:this.state.newName, complete:exp})
    }
    componentWillMount() {

        TodoStore.on ('CHANGE', ()=> {
            this.setState ({tasks: TodoStore.getAll()});
        })
    }

    render() {
        return(
            <div>
                <h2>Tasks</h2>
                <ul>
                    {
                        this.state.tasks.map((el,i) =>
                            (<li key={i}>
                                    {el.name + ' - ' + el.complete}
                                    <span className="glyphicon glyphicon-remove" onClick={this.remove.bind (this, i)}></span>
                                </li>
                            ))
                    }
                </ul>

                <input  type="text" onChange={this.firstValue}  />
                <input className="checkbox" type="checkbox"   />
                <input type="submit" value="Add Item" onClick={this.clickHandler} />

            </div>


        )}
}

module.exports = App;