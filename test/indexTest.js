const expect = chai.expect;

describe('drivers', function () {
  it('defines a `driver` driver', function () {
    expect(typeof driver).to.equal('object');
  });

  describe('updateDriverWithKeyAndValue(driver, key, value)', function () {
    beforeEach(function () {
      for (const key in driver) {
        delete driver[key];
      }

      driver.name = 'Sam';
    });

    it('returns an driver with the orignal key value pairs and the new key value pair', function () {
      expect(updateDriverWithKeyAndValue(driver, 'address', '11 Broadway')).to.eql({
        name: 'Sam',
        address: '11 Broadway'
      });
    });

    it('it does not modify the original driver, but rather returns a clone with the new data', function () {
      updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');

      expect(driver['address']).to.equal(undefined);
    });
  });

  describe('destructivelyUpdateDriverWithKeyAndValue(driver, key, value)', function () {
    it('updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver', function () {
      expect(destructivelyUpdateDriverWithKeyAndValue(driver, 'address', '12 Broadway')).to.eql({
        name: 'Sam',
        address: '12 Broadway'
      });

      expect(driver).to.eql({
        name: 'Sam',
        address: '12 Broadway'
      });
    });
  });

  describe('deleteFromDriverByKey(driver, key)', function () {
    it('deletes `key` from a clone of driver and returns the new driver (it is non-destructive)', function () {
      let newdriver = deleteFromDriverByKey(driver, 'name');

      expect(newdriver['name']).to.equal(undefined);
    });

    it('does not modify the original driver (it is non-destructive)', function () {
      deleteFromDriverByKey(driver, 'name');

      expect(driver['name']).to.equal('Sam');
    });
  });

  describe('destructivelyDeleteFromDriverByKey(driver, key)', function () {
    it('returns driver without the delete key/value pair', function () {
      let newdriver = destructivelyDeleteFromDriverByKey(driver, 'name');

      expect(newdriver['name']).to.equal(undefined);
    });

    it('modifies the original driver', function () {
      let newdriver = destructivelyDeleteFromDriverByKey(driver, 'name');

      expect(driver['name']).to.equal(undefined);
    });
  });
});
