const expect = chai.expect;

describe('index.js', () => {
  describe('currentUser', () => {
    it('is defined', () => {
      expect(currentUser, "The 'currentUser' variable must contain a string").to.be.a('string');
      expect(currentUser, "You need to modify the value of the 'currentUser' variable").to.not.be.empty;
    });
  });

  describe('welcomeMessage', () => {
    it('contains "Welcome to Flatbook, "', () => {
      expect(welcomeMessage).to.have.string('Welcome to Flatbook, ');
    });

    it("contains the value of the 'currentUser' variable", () => {
      expect(welcomeMessage).to.have.string(currentUser);
    });

    it('ends with an exclamation point!', () => {
      expect(welcomeMessage.substr(-1)).to.eq('!');
    });
  });

  describe('excitedWelcomeMessage', () => {
    it('contains "WELCOME TO FLATBOOK, "', () => {
      expect(excitedWelcomeMessage).to.have.string('WELCOME TO FLATBOOK, ');
    });

    it("contains the value of the 'currentUser' variable", () => {
      const upperCaseCurrentUser = currentUser.toUpperCase();

      expect(excitedWelcomeMessage).to.have.string(upperCaseCurrentUser);
    });

    it('ends with an exclamation point', () => {
      expect(excitedWelcomeMessage.substr(-1)).to.eq('!');
    });
  });

  describe('shortGreeting', () => {
    it(`contains "Welcome, "`, () => {
      expect(shortGreeting).to.have.string('Welcome, ');
    });

    it("contains the first initial of the name stored in the 'currentUser' variable", () => {
      const firstInitial = currentUser[0];
      const restOfName = currentUser.slice(1);

      expect(shortGreeting).to.have.string(firstInitial);
      expect(shortGreeting).to.not.have.string(restOfName);
    });

    it('ends with an exclamation point', () => {
      expect(shortGreeting.substr(-1)).to.eq('!');
    });
  });
});
