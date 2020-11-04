import { expect } from 'chai';
import Manager from '../src/Manager';

describe.only('Manager Class', () => {
  let manager;
  beforeEach(() => {
    manager = new Manager(27, 'Amber')
  })
  describe('initialize', () => {
    it('should be a function', () => {
      expect(Manager).to.be.a('function');
    })
  })

})