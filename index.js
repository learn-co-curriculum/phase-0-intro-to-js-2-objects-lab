// Write your solution in this file!

const employee = {
    name:          'Keith Richards',
    streetAddress: '1 Main St',
}

// 1
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

// 2
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
    }

// 3
function deleteFromEmployeeByKey(employee, key) {
    const copy = { ...employee };
    delete copy[key];
    return copy;
}

// 4
function destructivelyDeleteFromEmployeeByKey(employee, key) {
     delete employee[key];
     return employee;
}
