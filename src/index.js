// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

// console.log('This is the JavaScript entry file - your code begins here.');

const loginBtn = document.querySelector('#register-btn');
const loginPage = document.querySelector('.login-page');
const mainPage = document.querySelector('.main-page');

loginBtn.addEventListener('click', displayMainPage);


function updateElement(elements) {
  elements.forEach(element => {
    if(element.addHidden) {
      element.section.classList.add('hidden')
    } else {
      element.section.classList.remove('hidden')
    }
  });
}

function displayMainPage() {
  const sections = [{section: loginPage, addHidden: true}, {section: mainPage}];
  updateElement(sections);
}