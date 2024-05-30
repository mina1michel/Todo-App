"use strict";

const submit_button = document.querySelector("#todo-box");
const btn = document.querySelector(".btn");
const ul = document.getElementById("task-container");
const li_element = document.querySelector("li");

btn.addEventListener("click", function () {
  if (submit_button.value === "") return;
  const li = document.createElement("li");
  li.innerHTML = submit_button.value;
  ul.appendChild(li);
  submit_button.value = "";
  savedata();
});

ul.addEventListener("click", function (e) {
  e.target.classList.toggle("checked");
  savedata();
});

function savedata() {
  localStorage.setItem("data", ul.innerHTML);
}

function getdata() {
  ul.innerHTML = localStorage.getItem("data");
}
getdata();
