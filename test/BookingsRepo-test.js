import { expect } from 'chai';
import BookingsRepo from '../src/BookingsRepo';
import Booking from '../src/Booking';

describe.only('BookingsRepo Class', () => {
  let booking1, booking2, booking3, bookingsRepo;
  beforeEach(() => {
    booking1 =  new Booking('5fwrgu4i7khl6t6', 1, '2020/01/10', 10, []);
    booking2 =  new Booking('6fwradfi7khl6t3', 2, '2020/02/20', 20, []);
    booking3 =  new Booking('7fwrwofi7khl6t1', 3, '2020/03/30', 23, []);
    bookingsRepo = new BookingsRepo([booking1, booking2, booking3]);
  })

  describe('initialize', () => {
    it('should be a function', () => {
      expect(BookingsRepo).to.be.a('function');
    })

    it('should be an instance of BookingsRepo class', () => {
      expect(bookingsRepo).to.be.an.instanceof(BookingsRepo);
    })

    it('should have an empty array by default', () => {
      bookingsRepo = new BookingsRepo();

      expect(bookingsRepo.bookings).to.be.deep.equal([]);
    })

    it('should be able to hold bookings once passed in', () => {
      bookingsRepo = new BookingsRepo([booking1, booking2]);

      expect(bookingsRepo.bookings).to.deep.equal([booking1, booking2]);
    })

    it('should be able to hold more bookings once passed in', () => {
      expect(bookingsRepo.bookings).to.deep.equal([booking1, booking2, booking3]);
    })
  })

  describe('methods', () => {

  })

})