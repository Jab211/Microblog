"use strict";

const signupForm = document.querySelector("#signup");


// for register 
function login(loginData) {
    // POST /auth/login
    const options = {
      method: "POST",
      headers: {
        // This header specifies the type of content we're sending.
        // This is required for endpoints expecting us to send
        // JSON data.
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    };
  
    return fetch(apiBaseURL + "/auth/login", options)
      .then((response) => response.json())
      .then((loginData) => {
        window.localStorage.setItem("login-data", JSON.stringify(loginData));
        window.location.assign("../posts/posts.html"); // redirect
  
        return loginData;
      });
  }