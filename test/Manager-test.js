import { expect } from 'chai';
import Manager from '../src/Manager';

describe.only('Manager Class', () => {
  let manager, bookings, rooms;
  beforeEach(() => {
    manager = new Manager(27, 'Amber');
    bookings = [
      {
        "userID": 24,
        "date": "2019/09/23",
        "roomNumber": 6
      },
      {
        "userID": 7,
        "date": "2019/09/23",
        "roomNumber": 7
      },
      {
        "userID": 2,
        "date": "2019/06/23",
        "roomNumber": 7
      }
    ];
    rooms = [
      {"number":6,"costPerNight":405.58}, 
      {"number":7,"costPerNight":207.64}
    ];
  })
  describe('initialize', () => {
    it('should be a function', () => {
      expect(Manager).to.be.a('function');
    })

    it('should be an instance of Manager Class', () => {
      expect(manager).to.be.an.instanceof(Manager);
    })

    it('should have a name', () => {
      expect(manager.name).to.equal('Amber');
    })
  })
  describe('method', () => {
    it('should return today\'s total revenue', () => {
      const result = manager.returnTodayRevenue("2019/09/23", bookings, rooms);
      
      expect(result).to.equal(613.22);
    })

    it('should be able to return a different day\'s total revenue', () => {
      const result = manager.returnTodayRevenue("2019/06/23", bookings, rooms);
      
      expect(result).to.equal(207.64);
    })

    it('should return 0 if there\'s no booking on that day', () => {
      const result = manager.returnTodayRevenue("2019/07/23", bookings, rooms);
      
      expect(result).to.equal(0);
    })
  })

})