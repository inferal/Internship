/*
 * Home Work
 *
 * ### Задача 2
 *
 * Создайте класс User, который наследует от класса Person (из предыдущей задачи),
 * со свойствами signUpDate(дата регистрации, по умолчанию 0) и id.
 * Создайте несколько экземпляров класса и запишите их в массив users.
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

class User extends Person{
    constructor(firstName, lastName, age, gender, signUpDate = 0, id){
        super(firstName, lastName, age, gender);
        this.signUpDate = signUpDate;
        this.id = id;
    }
}

var user1, user2, user3;

const users = [
    user1 = new User('Yurik', 'Pop', 15, 'Male', Date.now(), 1),
    user2 = new User('Vas', 'Poli', 20, 'Male', Date.now(), 2),
    user3 = new User('Vik', 'Rok', 35, 'Male', Date.now(), 3)

];

console.log(users);