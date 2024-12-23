export const employee = {
  name: "Margie K",
  streetAddress: "123 Main Street",
};

export function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

export function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

export function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

export function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
