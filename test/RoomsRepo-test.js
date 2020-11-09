import { expect } from 'chai';
import RoomsRepo from '../src/RoomsRepo';
import Room from '../src/Room';

describe('RooomsRepo Class', () => {
  let roomsRepo, room1, room2, room3, roomsTaken;
  beforeEach(() => {
    room1 = new Room(1, "single", true, "queen", 1, 258.4);
    room2 = new Room(2, "suit", true, "full", 2, 230.48);
    room3 = new Room(3, "single", false, "twin", 1, 100.51);
    roomsRepo = new RoomsRepo([room1, room2, room3]);
  })

  describe('initialize', () => {
    it('should be a function', () => {
      expect(RoomsRepo).to.be.a('function');
    })

    it('should be an instance of RoomsRepo class', () => {
      expect(roomsRepo).to.be.an.instanceof(RoomsRepo);
    })

    it('should have an empty array by default', () => {
      roomsRepo = new RoomsRepo();

      expect(roomsRepo.rooms).to.be.deep.equal([]);
    })

    it('should be able to hold rooms once passed in', () => {
      roomsRepo = new RoomsRepo([room1, room2]);

      expect(roomsRepo.rooms).to.deep.equal([room1, room2]);
    })

    it('should be able to hold more rooms once passed in', () => {
      expect(roomsRepo.rooms).to.deep.equal([room1, room2, room3]);
    })
  })

  describe('methods', () => {
    it('should filter rooms by type', () => {
      const result = roomsRepo.filterRoomsByType('suit', [room1, room2]);
      
      expect(result).to.deep.equal([room2]);
    })

    it('should filter rooms by other type', () => {
      const result = roomsRepo.filterRoomsByType('single', [room1, room2, room3]);
      
      expect(result).to.deep.equal([room1, room3]);
    })

    it('should return available room', () => {
      const result = roomsRepo.returnAvailableRooms(roomsTaken = [3]);

      expect(result).to.deep.equal([room1, room2]);
    })

    it('should return available all room if no rooms are taken', () => {
      const result = roomsRepo.returnAvailableRooms(roomsTaken = []);

      expect(result).to.deep.equal([room1, room2, room3]);
    })
  })
})