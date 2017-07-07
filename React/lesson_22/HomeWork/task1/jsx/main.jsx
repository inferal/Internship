/*
 * Class Work
 *
 * ### Задача 1
 *
 * Создайте класс Person со слеюующими свойствами:
 *  * Конструктор принимает 4 аргумента:
 *          firstName(значение по умолчанию – “John”),
 *          lastName(значение по умолчанию – “Doe”),
 *          age(по умолчанию, если свойство не указано, то 0)
 *          и gender(по умолчанию – “Male”).
 *          начения записываются в this.firstName, this.lastName, this.age и this.gender соответственно.
 *  * Метод fullName, который не принимает аргументов и возвращает полное имя: e.g. “Jon Doe”.
 *  * Метод sayHi, который выводит на экран текст “Hello, my  name is “ + fullName.
 */


import React from 'react';
import ReactDOM from 'react-dom';


class Person{
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male"){
            this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.gender = gender
    }

    fullName(){
        let fuName = this.firstName + ' ' + this.lastName;
        return fuName;
    }

    sayHi(){
        let saHi = "Hello, my name is " + this.fullName();
        return saHi;
    }
}

const person = new Person();
console.log(person.sayHi());