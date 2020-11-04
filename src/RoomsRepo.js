class RoomsRepo {
  constructor(rooms) {
    this.rooms = rooms || [];
  }

  filterRoomsByType(type) {
    return this.rooms.filter(room => room.roomType === type);
  }
}

export default RoomsRepo