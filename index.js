// Object Lab

const employee = {//An object with two key-value pairs with literal syntax
    name: "Jonathan", 
    streetAddress: "Somewhere, Nice, USA",
}; 

function updateEmployeeWithKeyAndValue(employee, key, value) {//does not mutate the original employee
    return  {...employee, [key]: value};
}; 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {//mutates the original employee
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {//deletes but does not mutate the original employee
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {//deletes and mutates the original employee
    delete employee[key];
    return employee;
};