const employee = {
    name: "",
    streetAddress: ""
}

const updateEmployeeWithKeyAndValue = (employeeToUpdate, keyToUpdate, valueToUpdate) => {
    const newEmployee = { ...employeeToUpdate }
    newEmployee[keyToUpdate] = valueToUpdate
    return newEmployee
}