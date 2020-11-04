class RoomsRepo {
  constructor(rooms) {
    this.rooms = rooms || [];
  }

  filterRoomsByType(type, rooms) {
    return rooms.filter(room => room.roomType === type);
  }

  returnAvailableRooms(roomsTaken) {
    return this.rooms.reduce((roomsNum, room) => {
      if(!roomsTaken.includes(room.number)) {
        roomsNum.push(room.number);
      };
      return roomsNum;
    }, [])
  }
}

export default RoomsRepo