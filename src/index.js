// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/base.scss';
import Manager from './Manager';
import Customer from './Customer';
import Room from './Room';
import RoomsRepo from './RoomsRepo';
import Booking from './Booking';
import BookingsRepo from './BookingsRepo';
import apiCalls from './apiCalls';
import domUpdate from './domUpdate';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

//Gloabel Variable
let today, selectDate, currentCustomer, currentUser;
let customers, rooms, bookings, roomsRepo, bookingsRepo; 
let newBooking = {userID:1, date: '', roomNumber: 1};

//Query Selector
const loginInputs = document.querySelectorAll('.login-input');
const loginData = Array.from(loginInputs); 
const loginBtn = document.querySelector('#register-btn');
const loginPage = document.querySelector('.login-page');
const mainPage = document.querySelector('.main-page');
const dashboardRightSide = document.querySelector('.right-side');
const todayDataSection = document.querySelector('.today-data');
const listRoomsSection = document.querySelector('.list-rooms');
const calendarInput = document.querySelector('#calendar-input');
const calendarLabel = document.querySelector('.calendar-label');
const selectDateBtn = document.querySelector('.select-date-btn');
const displayRoomsSection = document.querySelector('.display-rooms');
const listTypes = document.querySelector('.list-types');
const guestSearchBtn = document.querySelector('.search-customer-btn');
const guestSearchInput = document.querySelector('#guest');
const displayGuestDataSection = document.querySelector('.display-guest-data');
const bookBtn = document.querySelector('.book-btn');
const deleteBookingInputs = document.querySelectorAll('.delete-input input');
const deleteBookingBtn = document.querySelector('.delete-booking-btn');

//event listener
loginBtn.addEventListener('click', checkLoginInputs);
selectDateBtn.addEventListener('click', displayAvailableRooms);
guestSearchBtn.addEventListener('click', displayGuestInfo);
listRoomsSection.addEventListener('change', displayFilterRooms);
displayRoomsSection.addEventListener('click', selectARoom);
bookBtn.addEventListener('click', makeBooking);
deleteBookingBtn.addEventListener('click', deleteBooking);

Promise.all([apiCalls.getUserData(), apiCalls.getRoomData(), apiCalls.getBookingData()])
  .then(data => {
    const allData = data.reduce((dataSet, eachDataset) => {      
      return dataSet = {...dataSet, ...eachDataset}
    }, {})
    instanciatate(allData);
    updateTodayDate();
    //apiCalls.deleteBookingData({id: 1604713186375})
    // currentUser = new Manager('Elle');
    // displayManagerPage();
    // currentUser = updateCurrentCustomer(50);
    // updateWelcome()
    // displayCustomerPage()
  })

function instanciatate(dataSet) {
  customers = dataSet.users.map(user => new Customer(user.id, user.name));
  rooms = dataSet.rooms.map(room => new Room(room.number, room.roomType, room.bidet, room.bedSize, room.numBeds, room.costPerNight));
  roomsRepo = new RoomsRepo(rooms);
  bookings = dataSet.bookings.map(booking => new Booking(booking.id, booking.userID, booking.date, booking.roomNumber, booking.roomServiceCharges));
  bookingsRepo = new BookingsRepo(bookings);
}

function updateTodayDate() {
  const year = new Date().getFullYear();
  let month = new Date().getMonth()+1;
  let date = new Date().getDate();
  month = month < 10 ? `0${month}` : month
  date = date < 10 ? `0${date}` : date
  today = `${year}/${month}/${date}`;
}

function checkLoginInputs() {
  event.preventDefault();
  if (!areInputsFilled() && checkUsername() && checkPassword()) {
    displayPage();
  }
}

function areInputsFilled() {
  return loginData.find(input => input.value === '');
}

function checkUsername() {
  const splitInput = loginData[0].value.split('customer'); 
  if (splitInput[0] === 'manager') {
    currentUser = new Manager('Elle');
    return true;
  } else if (splitInput[0] === '' && splitInput[1] < 51) {
    const id = parseInt(splitInput[1]).toFixed(0);
    currentUser = updateCurrentCustomer(id);
    return true;
  } else {
    return false
  }
}

function updateCurrentCustomer(id) {
  id = parseInt(id);
  return customers.find(customer => customer.id === id);
}

function checkPassword() {
  return loginData[1].value === 'overlook2020';
}

function updateElement(elements) {
  elements.forEach(element => {
    if(element.addHidden) {
      element.section.classList.add('hidden')
    } else if (element.addHide) {
      element.section.classList.add('hide')
    } else {
      element.section.classList.remove('hidden', 'hide')
    }
  });
}

function displayPage() {
  if (currentUser instanceof Manager) {
    displayManagerPage();
  } else if (currentUser instanceof Customer) {
    displayCustomerPage();
  }
  updateWelcome();
}

/////////////////////////Manager site below///////////////////////////
function displayManagerPage() { 
  const sections = [{section: loginPage, addHidden: true}, {section: mainPage}];
  updateElement(sections);
  displayManagerTodayData();
}

function displayManagerTodayData() {
  const bookedRooms = bookingsRepo.returnBookedRoomsNum('date', today);
  const openRooms = roomsRepo.returnAvailableRooms(bookedRooms);
  const revenue = currentUser.returnTodayRevenue(today, bookings, rooms);
  domUpdate.updateManagerTodayData(todayDataSection, (openRooms.length), revenue, ((bookedRooms.length)/25));
}

function displayAvailableRooms() {  
  selectDate = calendarInput.value.split('-').join('/');
  const bookedRooms = bookingsRepo.returnBookedRoomsNum('date', selectDate);
  const openRooms = roomsRepo.returnAvailableRooms(bookedRooms);
  const types = returnAllRoomTypes();
  domUpdate.displayTypes(listTypes, types);
  domUpdate.updateAvailableRooms(displayRoomsSection, openRooms);
  updateElement([{section: listRoomsSection}]);
}

function returnAllRoomTypes() {
  return rooms.reduce((types, room) => {
    if (!types.includes(room.roomType)) {
      types.push(room.roomType);
    }
    return types
  }, [])
}

function displayFilterRooms() {
  const filterRooms = filterAvailableRooms();
  if (filterRooms.length !== 0) {
    domUpdate.updateAvailableRooms(displayRoomsSection, filterRooms);
  } else {
    domUpdate.displayAppologyMsg();
  }
}

function filterAvailableRooms() {
  const type = event.target.value;
  const bookedRooms = bookingsRepo.returnBookedRoomsNum('date', selectDate);
  const openRooms = roomsRepo.returnAvailableRooms(bookedRooms);
  return roomsRepo.filterRoomsByType(type, openRooms);
}

function selectARoom() {
  newBooking.roomNumber = parseInt(event.target.className);
}

function makeBooking() {
  if (currentCustomer && selectDate > today) {
    newBooking.userID = currentCustomer.id;
    newBooking.date = selectDate;
    apiCalls.addBookingData(newBooking)
      .then((data) => {
        bookingsRepo.bookings.push(new Booking(data.id, data.userID, data.date, data.roomNumber));
        updateGuestInfo();
      })
  } else if (currentUser instanceof Customer && selectDate > today) {
    newBooking.userID = currentUser.id;
    newBooking.date = selectDate;
    apiCalls.addBookingData(newBooking)
      .then((data) => {
        bookingsRepo.bookings.push(new Booking(data.id, data.userID, data.date, data.roomNumber));
        updateCustomerPage();
      })
  } else {
    domUpdate.displayErrorMsg();
  }
}

function returnGuestInfo() {
  return customers.find(customer => customer.name === guestSearchInput.value)
}

function displayGuestInfo() {
  currentCustomer = returnGuestInfo();  
  if (currentCustomer) {
    updateGuestInfo();
    updateElement([{section: displayGuestDataSection}]);
  } else {
    updateElement([{section: displayGuestDataSection, addHidden: true}]);
  }
}

function updateGuestInfo() {
  const bookings = bookingsRepo.filterBookingsByRef('userID', currentCustomer.id);
  const totalCost = currentCustomer.returnUserRevenue(currentCustomer.id, bookings, rooms) 
  domUpdate.updateGuestInfo(displayGuestDataSection, bookings, totalCost);
}

function deleteBooking() {
  const inquery = checkDeleteBookingInputs();
  if (inquery && currentCustomer && selectDate > today) {
    apiCalls.deleteBookingData({id: inquery.id})
      .then(() => {
        udpateDeleteBooking(inquery.id);
        updateGuestInfo();
      })
  } else {
    domUpdate.displayErrorMsg();
  }
}

function checkDeleteBookingInputs() {
  selectDate = deleteBookingInputs[0].value.split('-').join('/');
  const roomNum = parseInt(deleteBookingInputs[1].value);
  return bookingsRepo.findBooking(selectDate, roomNum);
}

function udpateDeleteBooking(id) {
  deleteBookingInputs[0].value = '';
  deleteBookingInputs[1].value = '';
  bookingsRepo.removeBooking(id)
}

/////////////////////////Manager site above///////////////////////////

function updateWelcome() {
  const welcome = document.querySelector('h2');
  domUpdate.updateWelcomeMsg(welcome, currentUser);
}

function displayCustomerPage() {
  const sections = [{section: loginPage, addHidden: true}, {section: mainPage}];
  updateElement(sections);
  updateCustomerPage();
}

function updateCustomerPage() {
  const bookings = bookingsRepo.filterBookingsByRef('userID', currentUser.id);
  console.log(bookings);
  const totalCost = currentUser.returnUserRevenue(currentUser.id, bookings, rooms) 
  domUpdate.updateCustomerView(dashboardRightSide, calendarLabel, bookings, totalCost);
}
