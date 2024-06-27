"use strict";

const signUpForm = document.querySelector("#signUpForm");

const signupButton = document.querySelector("#signupButton");
const usernameInput = document.querySelector("#usernameInput");
const passwordInput = document.querySelector("#passwordInput");

function signUp(event) {
  event.preventDefault();

  const signUpData = {
    username: signUpForm.usernameInput.value,
    fullName: "jon Doe",
    password: signUpForm.passwordInput.value,
  };
  createUser(signUpData);
}

function createUser(signUpData) {
  fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpData),
  })
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      console.log(user);
      window.location.assign("login.html"); // redirec
    });
}

signupButton.onclick = signUp;
