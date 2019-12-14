'use strict';

import Employee from './Employee.js';
import Admin from './Admin.js';
import Designer from './Designer.js';
import Coder from './Coder.js';

export default class Company{
    constructor() {
        this._employeesArray = [];
    }
    get employeesArray(){
        return this._employeesArray;
    }


    pushAdmin(admin){
        if (admin instanceof Admin) {
            this._employeesArray.push(admin);
        }
    }

    pushCoder(coder){
        if (coder instanceof Coder) {
            this._employeesArray.push(coder);
        }
    }

    pushDesigner(designer){
        if (designer instanceof Designer) {
            this._employeesArray.push(designer);
        }
    }

    deleteEmployee(id){
        this._employeesArray = this._employeesArray.filter(
            employee => employee.id !== id
        );
    };

}
