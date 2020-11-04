import { expect } from 'chai'
import User from '../src/User';

describe('User class', () => {
  let user1, user2, users;
  beforeEach(() => {
    user1 = new User(24, 'Elle');
    user2 = new User(7, 'Isabel');
    users = [user2, user1];
  })
  describe('initialize', () => {
    it('should be a function', () => {
      expect(User).to.be.a('function');
    })
    it('should be an instance of User class', () => {
      expect(user1).to.be.an.instanceof(User);
    })
    it('should have an id', () => {
      expect(user1.id).to.equal(24);
    })
    it('should have a name', () => {
      expect(user2.name).to.equal('Isabel');
    })
  })

  describe('method', () => {
    it('should return a user name by passing id#', () => {
      const result = user1.returnNameById(7, users);

      expect(result).to.equal('Isabel')
    })
  })
  

})