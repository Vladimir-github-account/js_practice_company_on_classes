'use strict';
import Admin from "../model/Admin.js";
import Coder from "../model/Coder.js";
import Designer from "../model/Designer.js";
import Company from '../model/Company.js';

import {getEmployeesButton, getEmployeesList, addEmployeeAdminButton,addEmployeeDesignerButton,addEmployeeCoderButton,employeeAgeInput,employeeFirstNameInput,employeeLastNameInput,employeeSalaryInput,deleteEmployeeButton,deleteEmployeeIdInput} from './controls.js';


const freshcode = new Company();

let id = 0;

getEmployeesButton.onclick = showEmployeesList;

function showEmployeesList() {
    /*DELETING ALL CHILD IN 'getEmployeesList'(is it good?)*/
    while (getEmployeesList.firstChild) {
        getEmployeesList.removeChild(getEmployeesList.firstChild);
    }

    freshcode.employeesArray.forEach(employee =>
        getEmployeesList.append(createEmployeesListListItemElem(`Name: ${employee.firstName} ${employee.lastName} age: ${employee.age} salary: ${employee.salary} speciality: ${employee.speciality} id:  ${employee.id}`))
    );

    function createEmployeesListListItemElem(employee){
        const employeesListListItem = document.createElement("li");
        employeesListListItem.innerText = employee;
        return employeesListListItem;
    }

}

addEmployeeAdminButton.onclick = addEmployeeAdmin;

function addEmployeeAdmin() {

    const newAdmin = new Admin(
        employeeFirstNameInput.value,
        employeeLastNameInput.value,
        employeeAgeInput.value,
        employeeSalaryInput.value,
        id,
    );
    id++;
    freshcode.pushAdmin(newAdmin);
    employeeAgeInput.value = employeeFirstNameInput.value = employeeLastNameInput.value = employeeSalaryInput.value = "";
    showEmployeesList();
}

addEmployeeCoderButton.onclick = addEmployeeCoder;

function addEmployeeCoder() {

    const newCoder = new Coder(
        employeeFirstNameInput.value,
        employeeLastNameInput.value,
        employeeAgeInput.value,
        employeeSalaryInput.value,
        id,
    );
    id++;
    freshcode.pushCoder(newCoder);
    employeeAgeInput.value = employeeFirstNameInput.value = employeeLastNameInput.value = employeeSalaryInput.value = "";
    showEmployeesList();
}

addEmployeeDesignerButton.onclick = addEmployeeDesigner;

function addEmployeeDesigner() {

    const newDesigner = new Designer(
        employeeFirstNameInput.value,
        employeeLastNameInput.value,
        employeeAgeInput.value,
        employeeSalaryInput.value,
        id,
    );
    id++;
    freshcode.pushDesigner(newDesigner);
    employeeAgeInput.value = employeeFirstNameInput.value = employeeLastNameInput.value = employeeSalaryInput.value = "";
    showEmployeesList();
}

deleteEmployeeButton.onclick = deleteEmployee;

function deleteEmployee() {
    
    freshcode.deleteEmployee(Number(deleteEmployeeIdInput.value));
    deleteEmployeeIdInput.value = "";
    showEmployeesList();

}