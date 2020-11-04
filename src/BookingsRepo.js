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

}

export default BookingsRepo