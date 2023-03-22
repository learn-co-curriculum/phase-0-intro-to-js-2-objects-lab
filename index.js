// Write your solution in this file!
//created an Object employee
const employee = {
  name: 'John',
  age: 35,
  department: 'Engineering'
};
// we added a new key and value using a funciom
function updateEmployeeWithKeyAndValue(employeeObj, key, value)//parameters include the object,key and value 
{
  const updatedEmployee = { ...employeeObj, [key]: value };
  return updatedEmployee;
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'salary', 5000);
console.log(updatedEmployee);

//function to update the key 'age' to 36
function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
  employeeObj[key] = value;
  return employeeObj;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'age', 36);
console.log(employee);
//we use the spread operator, the function delete a key
function deleteFromEmployeeByKey(employeeObj, key) {
  const newEmployee = { ...employeeObj };
  delete newEmployee[key];//keyword delete
  return newEmployee;
}

const newEmployee = deleteFromEmployeeByKey(employee, 'department');//the keyword deletes even the value
console.log(newEmployee);

function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
  delete employeeObj[key];
  return employeeObj;
}

destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(employee);a
