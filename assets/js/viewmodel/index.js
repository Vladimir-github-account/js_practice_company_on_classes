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
        getEmployeesList.append(createEmployeesListListItemElem(employee))
    );

    function createEmployeesListListItemElem(employee){
        const employeesListListItem = document.createElement("li");

        const fullNameHeader =  document.createElement("h3");
        fullNameHeader.classList.add('fullNameHeader');
        fullNameHeader.innerText = 'Name: ' + employee.firstName + ' ' + employee.lastName;
        const ageHeader =  document.createElement("h3");
        ageHeader.classList.add('ageHeader');
        ageHeader.innerText = 'Age: ' + employee.age ;
        const salaryHeader =  document.createElement("h3");
        salaryHeader.classList.add('salaryHeader');
        salaryHeader.innerText ='Salary: ' + employee.salary;
        const specialityHeader =  document.createElement("h3");
        specialityHeader.classList.add('salaryHeader');
        specialityHeader.innerText ='Speciality: ' + employee.speciality;
        const idHeader =  document.createElement("h3");
        idHeader.classList.add('idHeader');
        idHeader.innerText = employee.id;

        employeesListListItem.appendChild(fullNameHeader);
        employeesListListItem.appendChild(ageHeader);
        employeesListListItem.appendChild(salaryHeader);
        employeesListListItem.appendChild(specialityHeader);
        employeesListListItem.appendChild(idHeader);

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