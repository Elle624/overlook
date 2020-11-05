import { expect } from 'chai';
import Booking from '../src/Booking';

describe('Booking class', () => {
  let booking1, booking2;
  beforeEach(() => {
    booking1 =  new Booking('5fwrgu4i7khl6t6', 1, '2020/01/10', 10, []);
    booking2 =  new Booking('6fwradfi7khl6t3', 2, '2020/02/20', 20, []);
  })
  
  describe('initialize', () => {
    it('should be a function', () => {
      expect(Booking).to.be.a('function');
    })

    it('should be an instance of Booking class', () => {
      expect(booking1).to.be.an.instanceof(Booking);
    })

    it('should have an id', () => {
      expect(booking1.id).to.equal('5fwrgu4i7khl6t6');
    })

    it('should have an user id', () => {
      expect(booking2.userID).to.equal(2);
    })

    it('should have a date', () => {
      expect(booking1.date).to.equal('2020/01/10');
    })

    it('should have a room number', () => {
      expect(booking2.roomNumber).to.equal(20);
    })

    it('should have an empty array as default for room service charges', () => {
      booking1 = new Booking('5fwrgu4i7khl6t6', 1, '2020/01/10', 10);
      expect(booking1.roomServiceCharges).to.deep.equal([]);
    })

    it('should have a room service charges', () => {
      expect(booking2.roomServiceCharges).to.deep.equal([]);
    })

  })
})

