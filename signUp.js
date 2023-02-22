// const togglePassword = document.querySelector("#togglePassword");
// const psw = document.querySelector("#myPass");

// togglePassword.addEventListener("click", function () {
//   // toggle the type attribute
//   const type = psw.getAttribute("type") === "password" ? "text" : "password";
//   psw.setAttribute("type", type);

//   // toggle the icon
//   this.classList.toggle("bi-eye");
// });

// const profileBtn = document.getElementById("my-profile-btn");
// const signupForm = document.getElementById("signup-form");
// const emptyAlert = document.getElementById("emptyalert");
// const popup = document.querySelector(".popup-overlay");
// const firstName = document.getElementById("firstname");
// const secondName = document.getElementById("secondname");
// const middleName = document.getElementById("middlename");
// const phoneNumber = document.getElementById("tel");
// const emailAddress = document.getElementById("signUpEmail");
// const signupPassword = document.getElementById("myPass");

// signupForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   checkInputs();
// });

// function checkInputs() {
//   // get the values from the inputs
//   const firstNameValue = firstName.value.trim();
//   const secondNameValue = secondName.value.trim();
//   const middleNameValue = middleName.value.trim();
//   const phoneNumberValue = phoneNumber.value.trim();
//   const emailAddressValue = emailAddress.value.trim();
//   const signupPasswordValue = signupPassword.value.trim();

//   if (
//     firstNameValue !== "" &&
//     secondNameValue !== "" &&
//     phoneNumberValue !== "" &&
//     emailAddressValue !== "" &&
//     signupPasswordValue !== ""
//   ) {
//     setInterval(() => {
//       popup.classList.add("show-popup");
//       document.body.classList.add("scroll");
//     }, 5000);
//   }

//   if (firstNameValue === "") {
//     setErrorFor(firstName, "First Name cannot be blank");
//   } else {
//     setSuccessFor(firstName);
//   }

//   if (secondNameValue === "") {
//     setErrorFor(secondName, "Second Name cannot be blank");
//   } else {
//     setSuccessFor(secondName);
//   }

//   if (phoneNumberValue === "") {
//     setErrorFor(phoneNumber, "Mobile Number cannot be blank");
//   } else {
//     setSuccessFor(phoneNumber);
//   }

//   if (emailAddressValue === "") {
//     setErrorFor(emailAddress, "Email cannot be blank");
//   } else if (!isEmail(emailAddressValue)) {
//     setErrorFor(emailAddress, "Invalid email address");
//     popup.classList.remove("show-popup");
//   } else {
//     setSuccessFor(emailAddress);
//   }

//   if (signupPasswordValue === "") {
//     setErrorFor(signupPassword, "Password cannot be blank");
//   } else {
//     setSuccessFor(signupPassword);
//   }
// }

// function setErrorFor(input, message) {
//   const formControl = input.parentElement;
//   const small = formControl.querySelector("small");

//   small.innerText = message;

//   formControl.className = "div error";
// }

// function setSuccessFor(input) {
//   const formControl = input.parentElement;

//   formControl.className = "div success";
// }

// function isEmail(checkEmail) {
//   return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     checkEmail
//   );
// }

// function isPassword(psw) {
//   return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(pwd);
// }
