import { expect } from 'chai';
import Room from '../src/Room';

describe('Rooom Class', () => {
  let room1;
  beforeEach(() => {
    room1 = new Room(1, "residential", true, "queen", 1, 258.4);
  })

  describe('initialize', () => {
    it('should be a function', () => {
      expect(Room).to.be.a('function');
    })

    it('should be an instance of Room class', () => {
      expect(room1).to.be.an.instanceof(Room);
    })

    it('should have a number', () => {
      expect(room1.number).to.equal(1);
    })

    it('should have a room type', () => {
      expect(room1.roomType).to.equal('residential');
    })

    it('could have a bidet', () => {
      expect(room1.bidet).to.equal(true);
    })

    it('should have a bed size', () => {
      expect(room1.bedSize).to.equal('queen');
    })

    it('should have number of beds', () => {
      expect(room1.numBeds).to.equal(1);
    })

    it('should have a cost per night', () => {
      expect(room1.costPerNight).to.equal(258.4);
    })
  })

})