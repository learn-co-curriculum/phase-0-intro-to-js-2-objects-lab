const employee = {
    name: "Asher Raphael",
    streetAddress: "123 Power St."
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}