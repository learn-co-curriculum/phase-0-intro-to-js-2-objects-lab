const employee = {
    name: "",
    streetAddress: ""
}

const updateEmployeeWithKeyAndValue = (employeeToUpdate, keyToUpdate, valueToUpdate) => {
    const newEmployee = { ...employeeToUpdate };
    newEmployee[keyToUpdate] = valueToUpdate;
    return newEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employeeToUpdate, keyToUpdate, valueToUpdate) => {
    employeeToUpdate[keyToUpdate] = valueToUpdate;
    return employeeToUpdate
}

const deleteFromEmployeeByKey = (employeeToUpdate, keyToDelete) => {
    const newEmployee = { ...employeeToUpdate };
    delete newEmployee[keyToDelete]
    return newEmployee;
}