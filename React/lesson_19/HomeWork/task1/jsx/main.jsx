/* Задача 1 */

/* Создайте React компонент, который выведет на экран массив users в виде таблицы. Массив users для задачи:

 var users = [{name:"Anne Montgomery",gender:"Female"},
 {name:"Annie George",gender:"Female"},
 {name:"Gary Butler",gender:"Male"},
 {name:"Lisa Mendoza",gender:"Female"},
 {name:"Marilyn Henry",gender:"Female"},
 {name:"Johnny Tucker",gender:"Male"},
 {name:"Chris Jacobs",gender:"Male"},
 {name:"Benjamin James",gender:"Male"}]
 */


import React from 'react';
import ReactDOM from 'react-dom';

const users = [
    {name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}
    ];

class TableRow extends React.Component {
    render() {

        const {data} = this.props;

        const row = data.map((data, i) =>
            <tbody key={i}>
            <tr>
                <td key={data.name}>{data.name}</td>
                <td key={data.gender}>{data.gender}</td>
            </tr>
            </tbody>

        );
        return (
                <span>{row}</span>

        );
    }
}

class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table>
                <TableRow data={this.props.data} />
            </table>
        );
    }
}

ReactDOM.render(
    <Table data={users} />,
    document.getElementById("example"));