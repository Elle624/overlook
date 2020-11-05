const getData = (path) => {
  return fetch(path)
    .then(response => response.json())
    .catch(err => console.log(err))
}

const apiCalls = {

  getUserData: () => {
    return getData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users');
  },

  getRoomData: () => {
    return getData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms');
  },

  getBookingData: () => {
    return getData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings');
  },

  addBookingData: (bookingData) => {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
      .then(response => response.json())
      .catch(err => console.log(err))
  },

  deleteBookingData: (bookingData) => {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
      .then(response => response.json())
      .catch(err => console.log(err))
  }
  
  
}

export default apiCalls;