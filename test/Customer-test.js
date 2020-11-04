import { expect } from 'chai';
import Customer from '../src/Customer';

describe.only('Customer Class', () => {
  let customer, bookings, rooms;
  beforeEach(() => {
    customer = new Customer(7, 'Felix');
    bookings = [
      {
        "userID": 7,
        "date": "2019/09/23",
        "roomNumber": 2
      },
      {
        "userID": 10,
        "date": "2019/09/23",
        "roomNumber": 20
      },
      {
        "userID": 7,
        "date": "2019/06/23",
        "roomNumber": 7
      }
    ];
    rooms = [
      {"number":7,"costPerNight":105.58}, 
      {"number":10,"costPerNight":307.64}
    ];
  })
  describe('initialize', () => {
    it('should be a function', () => {
      expect(Customer).to.be.a('function');
    })

    it('should be an instance of Customer Class', () => {
      expect(customer).to.be.an.instanceof(Customer);
    })

    it('should have a name', () => {
      expect(customer.name).to.equal('Felix');
    })
  })

})