const getData = (path) => {
  return fetch(path)
    .then(response => response.json())
    .catch(err => console.log(err))
}

const updateData = (path, action, data) => {
  console.log(path, action, data);
  
  return fetch(path, {
      method: action,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
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
    return updateData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', 'POST', bookingData)
  },

  deleteBookingData: (bookingData) => {
    return updateData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', 'DELETE', bookingData)
  }

}

export default apiCalls;