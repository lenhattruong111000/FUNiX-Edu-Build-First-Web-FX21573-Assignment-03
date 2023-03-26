//=============================================script for handle event on email form======================================//
const emailForm = document.querySelector(".form-input-email");
const emailInput = document.getElementById("emailInput");
const inputNotification = document.getElementById("inputNotification");
const btnSubmit = document.getElementById("btnEmailSubmit");
const personalInfo = document.querySelector(".personal-details-content");
const myEmail = "truonglnfx21573@funix.edu.vn";
//
const experienceTitle = document.querySelectorAll(".title-icon");
const infoContent = document.querySelectorAll(".info-content");
const btnViewMore = document.querySelectorAll(".btn-view-more");
const btnTextViewMore = document.querySelectorAll(".btn-text-view-more");
const btnTextViewLess = document.querySelectorAll(".btn-text-view-less");

// regex for validation an email
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// check valid email
let isEmail = false;

// handle event for submit button of Email Submission form
const submitForm = function () {
  isEmail = regex.test(emailInput.value);
  if (emailInput.value !== "") {
    if (isEmail === true && emailInput.value === myEmail) {
      personalInfo.classList.remove("hidden");
      emailForm.classList.add("hidden");
    } else if (isEmail === false) {
      inputNotification.textContent = "Không đúng định dạng email!";
      inputNotification.style.color = "green";
    } else {
      inputNotification.textContent = "Địa chỉ email không đúng!";
      inputNotification.style.color = "red";
    }
  } else {
    inputNotification.textContent = "Địa chỉ email không được để trống!";
    inputNotification.style.color = "blue";
  }
};

btnSubmit.addEventListener("click", submitForm);

//============================================= Script for handle event on experience, activities, hobbies,...=========================================//

// handle for hover on the title of experience, hobbies, activities,...

// we have 6 title and 6 view-more btn so using for loop to add event
for (let i = 0; i < experienceTitle.length; i++) {
  // handle for the mouse over on the title of experience, hobbies, activities,...
  experienceTitle[i].addEventListener("mouseover", function () {
    btnViewMore[i].classList.remove("hidden");
  });
  //handle for the mouse leave the title
  experienceTitle[i].addEventListener("mouseleave", function () {
    btnViewMore[i].classList.add("hidden");
  });
}
//========================================================= handle event of btn view-more=================================================//

//
for (let i = 0; i < btnTextViewMore.length; i++) {
  btnViewMore[i].addEventListener("click", function () {
    btnTextViewMore[i].classList.toggle("hidden");
    btnTextViewLess[i].classList.toggle("hidden");
    infoContent[i].classList.toggle("hidden");
  });
}
