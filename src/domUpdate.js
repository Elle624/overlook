const domUpdate = {
  updateElement: elements => {
    elements.forEach(element => {
      if (element.addHidden) {
        element.section.classList.add('hidden')
      } else if (element.addHide) {
        element.section.classList.add('hide')
      } else {
        element.section.classList.remove('hidden', 'hide')
      }
    });
  },

  updateWelcomeMsg: (title, user) => {
    title.innerText = `${user.name}`;
  },

  updateManagerTodayData: (section, rooms, revenue, occupation) => {
    section.innerHTML = '';
    section.innerHTML =
    `
    <h2 class="available-room">Available rooms today: ${rooms}</h2>
    <h2 class="today-revenue">Today's total revenue: $${revenue.toFixed(2)}</h2>
    <h2 class="today-occupation">Room Occupation rate: ${(occupation*100).toFixed(1)} % </h2>
    `
  },

  updateAvailableRooms: function (section, rooms) {
    section.innerHTML = '';
    section.innerHTML =
    `
    <section class="display-rooms">${this.listRooms(rooms)}
    `
  },

  listRooms: (rooms) => {
    let section = '';
    let bidetValue;
    rooms.forEach(room => {
      bidetValue = room.bidet ? 'Yes' : 'No';
      section +=
      `
      <section tabindex="0" class="room-list" id="${room.number}">
      <p>Room Number: ${room.number}</p>
      <p>Room Type: ${room.roomType}</p>
      <p>Bidet: ${bidetValue}</p>
      <p>Bed Size: ${room.bedSize}</p>
      <p>Number of Beds: ${room.numBeds}</p>
      <p>Cost Per Night: $${room.costPerNight}</p>
      </section>
      
      `
    })
    return section;
  },

  displayTypes: function (section, allTypes) {
    section.innerHTML = '';
    section.innerHTML =
    `
    <option aria-labelledby="available-room-filter" disabled selected value>-- select type --</option>
    ${this.updateTypes(allTypes)}
    `
  },

  updateTypes: allTypes => {
    let section = ''
    allTypes.forEach(type => {
      section +=
      `
      <option value="${type}">${type}</option>
      `
    })
    return section;
  },

  displayMessage: element => {
    if (element.applogy) {
      element.section.innerText = 'We are very sorry!!! Currently there are no rooms available for that type/day, please try a different type/date!'
    } else if (element.error) {
      element.section.innerText = 'Invalid input! Please double check (if) selected date/room#/customer and try again! '
    } 
  },

  updateGuestInfo: function (section, bookings, cost) {
    section.innerHTML = '';
    section.innerHTML =
    `
    <h2 class="guest guest-booking">Booking History</h2>
    <p class="guest" id="customer-data-display">Total Cost: ${cost.toFixed(2)}</p>
    <section>${this.displayBookings(bookings)}</section>
    `
  },

  displayBookings: bookings => {
    let section = '';
    bookings.forEach(booking => {
      const date = new Date(booking.date);
      const chosenDate = date.toDateString().split(' ');
      section += 
      `
      <section tabindex="0" class="booking-list" id="customer-data-display">
        <p>Date: ${chosenDate[1]} ${chosenDate[2]}, ${chosenDate[3]}</p>
        <p>Room Number: ${booking.roomNumber}</p>
      </section>
      `
    });
    return section;
  },

  updateCustomerView: function (section1, bookings, cost) {
    section1.innerHTML = '';
    section1.innerHTML =
    `
    <section class="display-guest-data">
      <h2 class="guest guest-booking">Booking History:</h2>
      <p class="guest" id="customer-data-display">Total Cost: $${cost.toFixed(2)}</p>
      <section>${this.displayBookings(bookings)}</section> 
    </section>
    `
  }

}

export default domUpdate