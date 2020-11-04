import { expect } from 'chai';
import Room from '../src/Room';

describe.only('Rooom Class', () => {
  let room1;
  beforeEach(() => {
    room1 = new Room(1, "residential suite", true, "queen", 1, 358.4);
  })

  describe('initialize', () => {
    it('should be a function', () => {
      expect(Room).to.be.a('function');
    })

    it('should be an instance of Room class', () => {
      expect(room1).to.be.an.instanceof(Room);
    })
  })

})