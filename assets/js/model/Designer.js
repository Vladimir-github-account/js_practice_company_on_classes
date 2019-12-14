'use strict';

import Employee from './Employee.js';

export default class Designer extends Employee {
    constructor(firstName, lastName, age, salary, id) {
        super(firstName, lastName, age, salary, "Designer", id);
    }
}