class RoomsRepo {
  constructor(rooms) {
    this.rooms = rooms || [];
  }

  filterRoomsByType(type, rooms) {
    return this.rooms.reduce((typeRooms, eachRoom) => {
      rooms.forEach(room => {
        if (room === eachRoom.number && eachRoom.roomType === type) {
          typeRooms.push(eachRoom.number)
        }
      })
      return typeRooms
    }, [])
  }

  returnAvailableRooms(roomsTaken) {
    return this.rooms.reduce((roomsNum, room) => {
      if (!roomsTaken.includes(room.number)) {
        roomsNum.push(room.number);
      }
      return roomsNum;
    }, [])
  }
}

export default RoomsRepo