// Write your solution in this file!
const employee = {
  name: "",
  streetAddress: "",
};

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
  const newEmployee = { ...employeeObj };
  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
  employeeObj[key] = value;
  return employeeObj;
}

function deleteFromEmployeeByKey(employeeObj, key) {
  const newEmployee = { ...employeeObj };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
  delete employeeObj[key];
  return employeeObj;
}
