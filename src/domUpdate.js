const domUpdate = {
  updateManagerTodayData: (section, rooms, revenue, occupation) => {
    section.innerHTML = '';
    section.innerHTML =
    `
    <h3 class="available-room">Available rooms today: ${rooms}</h3>
    <h3 class="today-revenue">Today's total revenue: ${revenue.toFixed(2)}</h3>
    <h3 class="today-occupation">Room Occupation rate: ${occupation*100}%</h3>
    `
  },

  updateGuestInfo: function (section, bookings, cost) {
    section.innerHTML = '';
    section.innerHTML =
    `
    <h3 class="guest guest-booking">Booking History</h3>
    <section>${this.displayBookings(bookings)}</section>
    <h3 class="guest guest-cost">Total Cost: ${cost}}</h3>
    `
  },

  displayBookings: (bookings) => {
    let section = '';
    bookings.forEach(booking => {
      section += 
      `
      <p>${booking.date} Room number ${booking.roomNumber}</p>
      `
    });
    return section;
  }
}

export default domUpdate