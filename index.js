const employee = {
  name: "Nihar",
  streetAddress: "300 Pickwick Dr.",
};
function updateEmployeeWithKeyAndValue(employee, key, value){
  return  {
    ...employee,
    [key]: value
  };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value
  return employee
}
function deleteFromEmployeeByKey(employee, key){
  const newEmployee = {...employee}
  delete newEmployee[key]
  return newEmployee
  }
function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key]
  return employee
}
