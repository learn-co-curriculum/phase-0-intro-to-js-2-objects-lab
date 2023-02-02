const employee = {
  name: "Max",
  streetAddress: "5 Main Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, ...{ [key]: value } }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newObj = { ...employee }
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

