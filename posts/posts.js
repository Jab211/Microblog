/* Posts Page JavaScript */

"use strict";
const postsContainer = document.querySelector("#postsContainer");
const createPostButton = document.querySelector("#createPostButton");
const postText = document.querySelector("#postText");
const logoutButton = document.querySelector("#logoutButton");
const loginData = getLoginData();

function loadPosts() {
  fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${loginData.token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      for (const post of posts) {
        const postDiv = document.createElement("div");
        const postHeader = document.createElement("h6");
  
        const postCreated = document.createElement("footer");
        postDiv.classList.add("card");
        postDiv.classList.add("p-4");
  
        postHeader.innerText = post.username;
        postDiv.innerText = post.text;
        postCreated.innerText = new Date(post.createdAt).toLocaleString();
  
        postsContainer.appendChild(postHeader);
        postsContainer.appendChild(postDiv);
        postsContainer.appendChild(postCreated);
      }
    });
  
}
// // roughly the code needed to create post

function createPost() {
  fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${loginData.token}`,
    },
    body: JSON.stringify({
      text: postText.value,
    }),
  }).then((response) => {
    // loadPosts();
    location.reload()
    return response.json();
  });
}
createPostButton.onclick = createPost;
logoutButton.onclick = logout;

loadPosts();

