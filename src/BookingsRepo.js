class BookingsRepo {
  constructor(bookings) {
    this.bookings = bookings || [];
  }

  returnBookedRoomsNum(ref, detail) {
    return this.bookings.reduce((bookedRoomsNum, booking) => {
      if(booking[ref] === detail) {
        bookedRoomsNum.push(booking.roomNumber);
      }
      return bookedRoomsNum
    }, [])
  }

  filterBookingsByRef(ref, detail) {
    return this.bookings.filter(booking => booking[ref] === detail);
  }

  findBooking(date, num) {
    return this.bookings.find(booking => booking.date === date && booking.roomNumber === num);
  }

  removeBooking(id) {
    this.bookings = this.bookings.filter(booking => booking.id !== id);
  }
}

export default BookingsRepo