const username = document.getElementById("username");
const usermassage = document.getElementById("usermassage");
const pswmessage = document.getElementById("pswmessage");
const repeatmessage = document.getElementById("repeatmessage");

const emailmessage = document.getElementById("emailmessage");

const email = document.getElementById("email");
const registerbtn = document.querySelector(".registerbtn");

const papaForm = document.getElementById("papaForm")

const form = document.getElementById("form")

const inputs = document.querySelectorAll(".input") 



const activeReg = () => {

  if (
    username.classList.contains("success") &&
    email.classList.contains("success") ) 
    {
    registerbtn.removeAttribute("disabled");
  }

  else {
    registerbtn.setAttribute("disabled" , "");
  }
  
}

username.addEventListener("keyup", (eo) => {
  username.classList.add("error");
  usermassage.style.display = "block";

  if (username.value.length > 2) {
    username.classList.add("success");
    usermassage.style.display = "none";
    username.nextElementSibling.style.opacity = "1";
  } else {
    username.classList.remove("success");
    username.classList.add("error");
    usermassage.style.display = "block";
    username.nextElementSibling.style.opacity = "0";
  }

  activeReg()
});

email.addEventListener("keyup", (eo) => {
  email.classList.add("error");
  emailmessage.style.display = "block";

  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEmail.test(email.value)) {
    email.classList.remove("error");
    email.classList.add("success");
    emailmessage.style.display = "none";
    email.nextElementSibling.style.opacity = "1";
  } else {
    email.classList.remove("success");
    email.classList.add("error");
    emailmessage.style.display = "block";
    email.nextElementSibling.style.opacity = "0";
  }
  activeReg()
});



// aaA8888#





