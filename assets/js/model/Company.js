'use strict';

import Employee from './Employee.js';

export default class Company{
    constructor() {
        this._employeesArray = [];
    }
    get employeesArray(){
        return this._employeesArray;
    }

    pushEmployee(employee){
        if (employee instanceof Employee) {
            this._employeesArray.push(employee);
        }
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
const freshcode = new Company();
const worker1 = new Employee("name","surname",25, 300, "Programmer", 1);
freshcode.pushEmployee(worker1);
console.log(freshcode.employeesArray);
freshcode.deleteEmployee(1);
console.log(freshcode.employeesArray);