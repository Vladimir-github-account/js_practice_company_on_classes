'use strict';

import Employee from './Employee.js';
import {positions} from './Employee.js';

export default class Coder extends Employee{
    constructor(firstName, lastName, age, salary, id) {
        super(firstName, lastName, age, salary, id);
        this._speciality = positions.CODER;
    }

    get speciality(){
        return this._speciality;
    }
    set speciality(speciality){
        this._speciality = speciality;
    }
}