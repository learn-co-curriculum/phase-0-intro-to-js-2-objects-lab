// Write your solution in this file!
const employee = {};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newObj = {...obj};

  newObj[key] = value;

  return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  const newObj = obj;

  newObj[key] = value;

  return newObj;
};

function deleteFromEmployeeByKey(employee, obj, key) {
  const newObj = {...obj};

  delete newObj.key;

  return newObj;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];

  return employee;
};
