import { expect } from 'chai'
import User from '../src/User';

describe('User class', () => {
  let user1;
  beforeEach(() => {
    user1 = new User(24, 'Elle')
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
  })

  describe('method', () => {

  })
  

})