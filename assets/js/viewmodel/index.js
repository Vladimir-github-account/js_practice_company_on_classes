'use strict';

import Company from '../model/Company.js';
import Employee from '../model/Employee.js';
import {getEmployeesButton, getEmployeesList, addEmployeeAdminButton,employeeAgeInput,employeeFirstNameInput,employeeLastNameInput,employeeSalaryInput,deleteEmployeeButton,deleteEmployeeIdInput} from './controls.js';

const freshcode = new Company();

let id = 0;

getEmployeesButton.onclick = showEmployeesList;

function showEmployeesList() {
    /*DELETING ALL CHILD IN 'getEmployeesList'(is it good?)*/
    while (getEmployeesList.firstChild) {
        getEmployeesList.removeChild(getEmployeesList.firstChild);
    }

    freshcode.employeesArray.forEach(employee =>
        getEmployeesList.append(createEmployeesListListItemElem(`Name: ${employee.firstName} ${employee.lastName} age: ${employee.age} salary: ${employee.salary}   id:  ${employee.id}`))
    );

    function createEmployeesListListItemElem(employee){
        const employeesListListItem = document.createElement("li");
        employeesListListItem.innerText = employee;
        return employeesListListItem;
    }

}

addEmployeeAdminButton.onclick = addEmployee;

function addEmployee() {

    const newEmployee = new Employee(
        employeeFirstNameInput.value,
        employeeLastNameInput.value,
        employeeAgeInput.value,
        employeeSalaryInput.value,
        id,
    );
    id++;
    freshcode.pushEmployee(newEmployee);
    employeeAgeInput.value = employeeFirstNameInput.value = employeeLastNameInput.value = employeeSalaryInput.value = "";
    showEmployeesList();
}

deleteEmployeeButton.onclick = deleteEmployee;

function deleteEmployee() {
    
    freshcode.deleteEmployee(Number(deleteEmployeeIdInput.value));
    deleteEmployeeIdInput.value = "";
    showEmployeesList();

}