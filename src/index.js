// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/base.scss';
import Manager from './Manager.js';
import Customer from './Customer.js';
import User from './User';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

//Gloabel Variable
let currentUser;

//Query Selector
const loginInputs = document.querySelectorAll('.login-input');
const loginData = Array.from(loginInputs); 
const loginBtn = document.querySelector('#register-btn');
const loginPage = document.querySelector('.login-page');
const mainPage = document.querySelector('.main-page');
const dashboardRightSide = document.querySelector('.right-side');
const todayDataSection = document.querySelector('.today-data');
const availableRooms = document.querySelector('.available-room');
const todayRevenue = document.querySelector('.today-revenue');
const todayOccupation = document.querySelector('.today-occupation');

//event listener
loginBtn.addEventListener('click', checkLoginInputs);


//function
function checkLoginInputs() {
  if (!areInputsFilled() && checkUsername() && checkPassword()) {
    displayPage();
  }
}

function areInputsFilled() {
  return loginData.find(input => input.value === '');
}

//new User hard code in
function checkUsername() {
  const splitInput = loginData[0].value.split('customer'); 
  if (splitInput[0] === 'manager') {
    currentUser = new Manager('Elle')
    return true;
  } else if (splitInput[0] !== 'manager' && splitInput[1] < 51) {
    const id = parseInt(splitInput[1]);
    currentUser = new User(id, 'Isabel')
   return true;
  } else {
    return false
  }
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
      element.section.classList.remove('hidden')
    }
  });
}

function displayPage() {
  if (currentUser instanceof Manager) {
    displayManagerPage();
  } else if (currentUser instanceof User) {
    displayCustomerPage();
  }
  updateWelcome();
}

function displayManagerPage() { 
  const sections = [{section: loginPage, addHidden: true}, {section: mainPage}];
  updateElement(sections);
}

function displayCustomerPage() {
  const sections = [{section: loginPage, addHidden: true}, {section: mainPage}, {section: dashboardRightSide, addHide: true}];
  updateElement(sections);
  updateCustomerPage();
}

function updateWelcome() {
  const welcome = document.querySelector('h2');
  welcome.innerText = `Welcome back ${currentUser.name}`;
}

//hard code in
function updateCustomerPage() {
  todayDataSection.innerHTML = '';
  todayDataSection.innerHTML += 
  `
  <h3 class="guest guest-booking">Booking History</h3>
  <p>2020/03/02 room 2</p>
  <h3 class="guest guest-cost">Total Cost: $2000</h3>
  `
}