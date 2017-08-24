const expect = chai.expect;

describe('driver', function() {
  let driver;
  before(() => {
    driver = new Driver("Alfie", "Aug 9, 1995")
  })

  describe('creating a new driver', function() {
    it('can create a Driver with a name and startDate', function() {
      expect(driver.name).to.equal("Alfie")
    })

    it('sets the driver startDate as a date object', function() {
      expect(driver.startDate).to.be.instanceof(Date)
    })
  })

  describe('yearsExperienceFromBeginningOf', function() {
    it('calculates the number of years driven given an endDate', function() {
      expect(driver.yearsExperienceFromBeginningOf(2017)).to.equal(21)
    })
  })
})


describe('Route', function() {
  let route;

  describe('blocksTravelled', function() {
    it('calculates the number of blocksTravelled', function() {
      let route = new Route({horizontal: 'Park', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
      expect(route.blocksTravelled()).to.equal(11)
    })

    it('calculates the number of horizontal blocks travelled', function() {
      let route = new Route({horizontal: '1st Avenue', vertical: '34'}, {horizontal: 'Park', vertical: '34'})
      expect(route.blocksTravelled()).to.equal(4)
    })

    it('combines horizontal and vertical blocks travelled', function() {
      let route = new Route({horizontal: '1st Avenue', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
      expect(route.blocksTravelled()).to.equal(15)
    })
  })

  describe('estimatedTime', function() {
    it('estimates time in minutes, with travel time of three blocks in a minute', function() {
      let route = new Route({horizontal: '1st Avenue', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
      expect(route.estimatedTime()).to.equal(5)
    })

    it('estimates time in minutes, with travel time of two blocks in a minute during peak hours', function() {
      let route = new Route({horizontal: '1st Avenue', vertical: '34'}, {horizontal: 'Park', vertical: '46'})
      expect(route.estimatedTime(true)).to.equal(8)
    })
  })
})
