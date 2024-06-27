"use strict";
const logoutButton = document.querySelector("#logoutButton");
const profileContainer = document.querySelector("#profileContainer");
const loginData = getLoginData();

console.log(loginData);

function getProfile() {
  fetch(
    "http://microbloglite.us-east-2.elasticbeanstalk.com/api/users/" +
      loginData.username,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${loginData.token}`,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      console.log(user);
      createProfile(user);
    });
}
function createProfile(user) {
  const profileDiv = document.createElement("div");
  profileDiv.classList.add("card");
  profileDiv.classList.add("p-4");

  const profileHeader = document.createElement("h3");
  profileHeader.innerText =  `${user.fullName} `;
  const profileHeader2 = document.createElement("h6");
  profileHeader2.innerText = `@${user.username}`;

  const profileParagraph = document.createElement("p");
  profileParagraph.innerText = `Bio: ${user.bio}`;

  profileDiv.appendChild(profileHeader);
  profileDiv.appendChild(profileHeader2);
  profileDiv.appendChild(profileParagraph);

  profileContainer.appendChild(profileDiv);
}

// function createProfile(user) {
//   const profileDiv = document.createElement("div");
//   const profileHeader = document.createElement("h6");
//   const profileParagraph = document.createElement("p");

//   profileDiv.classList.add("card");
//   profileDiv.classList.add("p-4");

//   profileHeader.innerText = user.fullName;
//   profileParagraph.innerText = user.username;
//   profileDiv.innerText = user.bio;

//   profileContainer.appendChild(profileHeader);
//   profileContainer.appendChild(profileDiv);
//   profileContainer.appendChild(profileParagraph)
// }

getProfile();
// createProfile();

logoutButton.onclick = logout;
