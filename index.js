const employee = {
    name: "Asher Raphael",
    streetAddress: "123 Power St."
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value}
}