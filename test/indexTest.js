import { employee, updateEmployeeWithKeyAndValue, destructivelyUpdateEmployeeWithKeyAndValue, deleteFromEmployeeByKey, destructivelyDeleteFromEmployeeByKey } from '../index.js';
import { expect } from 'chai';

describe('employees', function () {
  describe('updateEmployeeWithKeyAndValue(employee, key, value)', function () {
    beforeEach(function () {
      for (const key in employee) {
        delete employee[key];
      }
      employee.name = 'Sam';
    });

    it('returns an employee with the original key value pairs and the new key value pair', function () {
      expect(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')).to.eql({
        name: 'Sam',
        streetAddress: '11 Broadway',
      });
    });

    it('does not modify the original employee, but rather returns a clone with the new data', function () {
      updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
      expect(employee.streetAddress).to.equal(undefined);
    });
  });

  describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function () {
    it('updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee', function () {
      expect(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')).to.eql({
        name: 'Sam',
        streetAddress: '12 Broadway',
      });
    });
  });

  // Additional tests follow the same structure
});
