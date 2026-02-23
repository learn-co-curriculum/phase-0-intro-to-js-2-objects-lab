const employee = {
    name: "Julian"
};
global.employee = employee;
function updateEmployeeWithKeyAndValue(obj, key, value) {
  return {
    ...obj,
    [key]: value
  };
}
global.updateEmployeeWithKeyAndValue = updateEmployeeWithKeyAndValue;
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
global.destructivelyUpdateEmployeeWithKeyAndValue = destructivelyUpdateEmployeeWithKeyAndValue;
function deleteFromEmployeeByKey(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}
global.deleteFromEmployeeByKey = deleteFromEmployeeByKey;
function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}
global.destructivelyDeleteFromEmployeeByKey = destructivelyDeleteFromEmployeeByKey;
// Write your solution in this file!
