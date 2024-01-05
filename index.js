
let employee = {
  name: "Sam",
  streetAddress: "11 Broadway"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updatedEmployee = {};

  for (const prop in employee) {
    updatedEmployee[prop] = employee[prop];
  }

  updatedEmployee[key] = value;

  return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const updatedEmployee = {};

  for (const prop in employee) {
    if (prop !== key) {
      updatedEmployee[prop] = employee[prop];
    }
  }

  return updatedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}