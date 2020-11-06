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

  updateAvailableRooms: function (section, rooms) {
    section.innerHTML = '';
    section.innerHTML =
    `
    <section class="display-rooms">${this.listRooms(rooms)}
    <button class="book-btn">Book</button>
    </section>
    `
  },

  displayTypes: function (section, allTypes) {
    section.innerHTML = '';
    section.innerHTML =
    `
    <option disabled selected value>-- select --</option>
    ${this.updateTypes(allTypes)}
    `
  },

  updateTypes: allTypes => {
    let section = ''
    allTypes.forEach(type => {
      section +=
      `
      <option>${type}</option>
      `
    })
    return section;
  },

  listRooms: (rooms) => {
    let section = '';
    rooms.forEach(room => {
      section +=
      `
      <p tabindex="0">room ${room}</p>
      `
    })
    return section;
  },

  displayAppologyMsg: () => {
    window.alert('We are very sorry!!! Currently there are no rooms available for that type/day, please try a different type/date!')
  },

  updateGuestInfo: function (section, bookings, cost) {
    section.innerHTML = '';
    section.innerHTML =
    `
    <h3 class="guest guest-booking">Booking History</h3>
    <section>${this.displayBookings(bookings)}</section>
    <h3 class="guest guest-cost">Total Cost: ${cost.toFixed(2)}</h3>
    `
  },

  displayBookings: bookings => {
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