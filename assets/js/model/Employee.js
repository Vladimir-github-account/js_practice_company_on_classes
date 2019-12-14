'use strict';

import Man from './Man.js';

export const positions = {
    ADMIN: 'Admin',
    CODER: 'Coder',
    DESIGNER: 'Designer',
};

export default class Employee extends Man{
    constructor(firstName, lastName, age, salary, id){
        super(firstName, lastName, age);
        this._salary = salary;
        this._id = id;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }

    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
}

