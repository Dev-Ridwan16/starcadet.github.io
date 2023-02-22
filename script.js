const theDate = new Date();
document.getElementById("date").innerHTML = theDate.toLocaleDateString();

const closeBtn = document.querySelector(".fa-times");
closeBtn.style.display = "none";

const navBtn = document.querySelectorAll(".switch");
const body = document.querySelector("body");

navBtn.forEach((item) => {
  const menu = document.getElementById("modal");

  item.addEventListener("click", () => {
    if (item.classList.contains("fa-align-left")) {
      item.classList.toggle("fa-times");
      menu.classList.toggle("mainMenu");
      // console.log(menu);
    }

    if (!menu.classList.contains("mainMenu")) {
      document.body.classList.add("scroll");
    } else {
      document.body.classList.remove("scroll");
    }
  });
});

const signInBtn = document.getElementById("signinbtn");

signInBtn.addEventListener("click", signInUser);

function signInUser(e) {
  e.preventDefault();
  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");
  const emailErrorMsg = document.getElementById("email-error");
  var form = document.getElementById("formParent");

  if (emailInput == 0 && passwordInput == 0) {
    emailErrorMsg.innerHTML = "Invalid Email or Password";

    emailErrorMsg.classList.remove("remove");

    form.reset();
  } else if (emailInput.value == 0) {
    emailErrorMsg.innerHTML = "Please fill your Details";

    emailErrorMsg.classList.remove("remove");
  } else if (passwordInput.value == 0) {
    emailErrorMsg.innerHTML = "Couldn't read your password";

    emailErrorMsg.classList.remove("remove");
  }

  setTimeout(() => {
    emailErrorMsg.classList.add("remove");
  }, 1500);
}

const togglePassword = document.querySelector("#togglePassword");
const psw = document.querySelector("#myPass");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type = psw.getAttribute("type") === "password" ? "text" : "password";
  psw.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});

const signupForm = document.getElementById("signup-form");
const emptyAlert = document.getElementById("emptyalert");
const popup = document.querySelector(".popup-overlay");
const firstName = document.getElementById("firstname");
const secondName = document.getElementById("secondname");
const middleName = document.getElementById("middlename");
const phoneNumber = document.getElementById("tel");
const emailAddress = document.getElementById("signUpEmail");
const signupPassword = document.getElementById("myPass");
const greetUser = document.getElementById("greet-user");
const userEmail = document.getElementById("user-wallet-email");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const firstNameValue = firstName.value.trim();
  const secondNameValue = secondName.value.trim();
  const middleNameValue = middleName.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const emailAddressValue = emailAddress.value.trim();
  const signupPasswordValue = signupPassword.value.trim();

  if (
    firstNameValue !== "" &&
    secondNameValue !== "" &&
    phoneNumberValue !== "" &&
    emailAddressValue !== "" &&
    signupPasswordValue !== ""
  ) {
    setInterval(() => {
      popup.classList.add("show-popup");
      document.body.classList.add("scroll");
    }, 5000);
  }

  if (firstNameValue === "") {
    setErrorFor(firstName, "First Name cannot be blank");
  } else {
    setSuccessFor(firstName);
  }

  if (secondNameValue === "") {
    setErrorFor(secondName, "Second Name cannot be blank");
  } else {
    setSuccessFor(secondName);
  }

  if (phoneNumberValue === "") {
    setErrorFor(phoneNumber, "Mobile Number cannot be blank");
  } else {
    setSuccessFor(phoneNumber);
  }

  if (emailAddressValue === "") {
    setErrorFor(emailAddress, "Email cannot be blank");
  } else if (!isEmail(emailAddressValue)) {
    setErrorFor(emailAddress, "Invalid email address");
    popup.classList.remove("show-popup");
  } else {
    setSuccessFor(emailAddress);
  }

  if (signupPasswordValue === "") {
    setErrorFor(signupPassword, "Password cannot be blank");
  } else {
    setSuccessFor(signupPassword);
  }
  const profileBtn = document.getElementById("my-profile-btn");
  profileBtn.addEventListener("click", () => {
    localStorage.setItem("userName", firstNameValue);
    localStorage.setItem("mail", emailAddressValue);
    return false;
  });
}

greetUser.innerHTML = `Welcome ${localStorage.getItem("userName")}!`;
userEmail.innerHTML = localStorage.getItem("mail");

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "div error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "div success";
}

function isEmail(checkEmail) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    checkEmail
  );
}

function isPassword(psw) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(pwd);
}

const addTocartBtn = document.querySelectorAll("button#add-to-cart-btn");
const btnItemCount = document.querySelectorAll(
  "div.btn-and-cart-desktop>input#count-item"
);
let itemCount = 0;
let index = undefined;

for (let i = 0; i < addTocartBtn.length; i++) {
  addTocartBtn[i].addEventListener("click", function () {
    // document.getElementById("count-item").value = itemCount++;
    index = i;
    switch (index) {
      case 0:
        console.log("Item 1 added to cart");
        break;
    }
  });
}

/*
for (let i = 0; i < addTocartBtn.length; i++) {
      addTocartBtn[i].addEventListener(
        "click",
        function (index) {
          // for (let j = 0; j < btnItemCount.length - 1; j++) {}
          console.log("you clicked element index of " + index);
          if (items[0]) {
            console.log("item1");
          }
        }.bind(this, i)
      );
    }
    const addTocartBtnIndex = Array.from(addTocartBtn).indexOf(e.target);

    const btnItemCountAll = Array.from(btnItemCount).map(
      (number, inx) => number
    );
    console.log(btnItemCountAll[0]);
 */
