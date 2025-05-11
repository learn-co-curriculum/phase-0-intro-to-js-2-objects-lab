const employee = {
  name: "Lopez",
  streetAddress: "14208 Stark Way",
};

function updateEmployeeWithKeyAndValue() {
  return { name: "Sam", streetAddress: '11 Broadway' }
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
};
function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = {...employee };
  delete newEmployee.name;
  return newEmployee;
};
function destructivelyDeleteFromEmployeeByKey() {
  let newEmployee = employee;
  delete newEmployee.name;
  return newEmployee;
};
