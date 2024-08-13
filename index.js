// Define the functions

// 1. Update employee without mutating the original object
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // 2. Destructive update of the employee object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // 3. Delete a key from employee without mutating the original object
  function deleteFromEmployeeByKey(employee, key) {
    const { [key]: _, ...newEmployee } = employee; // Use destructuring to exclude the key
    return newEmployee;
  }
  
  // 4. Destructive delete of a key from the employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage
  
  // Initialize the employee object
  let employee = {
    name: 'Alice Smith',
    streetAddress: '123 Maple Street'
  };
  
  // Non-destructive update
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Oak Avenue');
  console.log('Updated Employee (non-destructive):', updatedEmployee); // { name: 'Alice Smith', streetAddress: '456 Oak Avenue' }
  console.log('Original Employee:', employee); // { name: 'Alice Smith', streetAddress: '123 Maple Street' }
  git
  // Destructive update
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '789 Pine Road');
  console.log('Original Employee (destructive):', employee); // { name: 'Alice Smith', streetAddress: '789 Pine Road' }
  
  // Non-destructive delete
  var employeeWithoutAddress = deleteFromEmployeeByKey(employee, 'streetAddress');
  console.log('Employee Without Address (non-destructive):', employeeWithoutAddress); // { name: 'Alice Smith' }
  console.log('Original Employee:', employee); // { name: 'Alice Smith', streetAddress: '789 Pine Road' }
  
  // Destructive delete
  destructivelyDeleteFromEmployeeByKey(employee, 'name');
  console.log('Original Employee (destructive):', employee); // { streetAddress: '789 Pine Road' }
  