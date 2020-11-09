class RoomsRepo {
  constructor(rooms) {
    this.rooms = rooms || [];
  }

  filterRoomsByType(type, rooms) {
    return this.rooms.reduce((typeRooms, eachRoom) => {
      rooms.forEach(room => {
        if (room.number === eachRoom.number && eachRoom.roomType === type) {
          typeRooms.push(eachRoom)
        }
      })
      return typeRooms
    }, [])
  }

  returnAvailableRooms(roomsTaken) {
    return this.rooms.reduce((availableRooms, room) => {
      if (!roomsTaken.includes(room.number)) {
        availableRooms.push(room);
      }
      return availableRooms;
    }, [])
  }
}

export default RoomsRepo