import User from './User';

class Customer extends User {
  constructor(id, name) {
    super(id, name);
  }

  returnUserRevenue(id, bookings, rooms) {
    return bookings.reduce((totalCost, booking) => {
      rooms.forEach(room => {
        if (booking.userID === id && booking.roomNumber === room.number) {
          totalCost += room.costPerNight;
        }
      });
      return totalCost;
    }, 0)
  }

}

export default Customer;