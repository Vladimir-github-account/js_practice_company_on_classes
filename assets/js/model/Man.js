'use strict';

export default class Man {
    constructor(firstName, lastName, age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
         this._firstName = firstName;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        this._firstName = lastName;
    }
    get age(){
        return this._age;
    }
    set age(age){
        this._age = age;
    }
}

