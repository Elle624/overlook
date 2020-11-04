import User from './User';

class Manager extends User {
  constructor(id, name) {
    super(id, name);
  }

  returnTodayRevenue(date, bookings, rooms) {
    return bookings.reduce((totalCost, booking) => {
        rooms.forEach(room => {
          if (booking.date === date && booking.roomNumber === room.number) {
            totalCost += room.costPerNight;
          }
        });
        return totalCost;
    }, 0)
  }

}

export default Manager;