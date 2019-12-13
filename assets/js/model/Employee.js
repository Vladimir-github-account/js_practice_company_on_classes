'use strict';

import Man from './Man.js';

export default class Employee extends Man{
    constructor(firstName, lastName, age, salary, speciality, id){
        super(firstName, lastName, age);
        this._salary = salary;
        this._speciality = speciality;
        this._id = id;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }
    get speciality(){
        return this._speciality;
    }
    set speciality(speciality){
        this._speciality = speciality;
    }
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
}

