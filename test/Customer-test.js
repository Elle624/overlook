import { expect } from 'chai';
import Customer from '../src/Customer';

describe('Customer Class', () => {
  let customer1, customer2, customer3, bookings, rooms;
  beforeEach(() => {
    customer1 = new Customer(7, 'Isbael');
    customer2 = new Customer(2, 'Felix');
    customer3 = new Customer(1, 'Otter');
    bookings = [
      {
        "userID": 7,
        "date": "2019/09/23",
        "roomNumber": 20
      },
      {
        "userID": 2,
        "date": "2019/11/01",
        "roomNumber": 20
      },
      {
        "userID": 7,
        "date": "2019/06/23",
        "roomNumber": 7
      }
    ];
    rooms = [
      {"number": 7, "costPerNight": 105.58}, 
      {"number": 20, "costPerNight": 307.64}
    ];
  })
  describe('initialize', () => {
    it('should be a function', () => {
      expect(Customer).to.be.a('function');
    })

    it('should be an instance of Customer Class', () => {
      expect(customer1).to.be.an.instanceof(Customer);
    })

    it('should have a name', () => {
      expect(customer2.name).to.equal('Felix');
    })

    it('should have an id', () => {
      expect(customer3.id).to.equal(1);
    })
  })

  describe('method', () => {
    it('should return user\'s total revenue', () => {
      const result = customer1.returnUserRevenue(7, bookings, rooms);
      
      expect(result.toFixed(2)).to.equal('413.22');
    })

    it('should be able to return a different user\'s total revenue', () => {
      const result = customer2.returnUserRevenue(2, bookings, rooms);
      
      expect(result.toFixed(2)).to.equal('307.64');
    })

    it('should return 0 if user did not book any rooms', () => {
      const result = customer3.returnUserRevenue(1, bookings, rooms);
      
      expect(result).to.equal(0);
    })

  })

})