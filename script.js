function toggleMenu() {
 const menu = document.querySelector(".menu-links");
 const icon = document.querySelector(".hamburger-icon");
 menu.classList.toggle("open");
 icon.classList.toggle("open");
}

//Modal window
const btnsOpenModal = document.querySelectorAll(".btn-show-modal");
const btnCloseModal = document.querySelector(".btn-close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

// Function for Open a Modal window
const openModal = function () {
 modal.classList.remove("hidden");
 overlay.classList.remove("hidden");
};
// Function for Close a Modal window
const closeModal = function (e) {
 e.preventDefault();
 modal.classList.add("hidden");
 overlay.classList.add("hidden");
};

// add event listener for 2 btn for Open
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// add event listener for Close
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
 if (e.key === "Escape" && !modal.classList.contains("hidden")) {
  closeModal();
 }
});
// Tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
 const clicked = e.target.closest(".operations__tab");
 // Guard clause
 if (!clicked) return;

 //Active Tab
 tabs.forEach(function (el) {
  el.classList.remove("operations__tab--active");
 });
 tabsContent.forEach(function (el) {
  el.classList.remove("operations__content--active");
 });

 clicked.classList.add("operations__tab--active");

 // Active Content Area
 document
  .querySelector(`.operations__content--${clicked.getAttribute("data-tab")}`)
  .classList.add("operations__content--active");
});

// Progress Bar
const progressBar = function (skillId, numOfCircle, num, timeForLoad) {
 let numElement = document.querySelector(`#${skillId} .inner`);
 let root = document.documentElement;
 let counter = 0;
 let intervalId;

 root.style.setProperty("--changeHTML", numOfCircle + 45);
 root.style.setProperty("--changeCSS", numOfCircle + 106);
 root.style.setProperty("--changeJS", numOfCircle + 153);
 root.style.setProperty("--changeREACT", numOfCircle + 394);

 intervalId = setInterval(() => {
  if (counter == num) {
   clearInterval(intervalId);
  } else {
   counter = counter + 1;
   numElement.innerHTML = counter + "%";
  }
 }, timeForLoad);
};

progressBar("skill-1", 0, 90, 17);
progressBar("skill-2", 0, 75, 20);
progressBar("skill-3", 0, 65, 24);
progressBar("skill-4", 0, 10, 150);

// /////////////////////////////////

// // Divide duplicates and non-duplicates number

// let arr = [1, 2, 3, 4, 5, 2, 6, 3, 7, 8, 8];
// let duplicates = [];
// let otherNumber = [];

// arr.forEach(function (value, index, array) {
//  if (
//   array.indexOf(value, index + 1) !== -1 &&
//   duplicates.indexOf(value) === -1
//  ) {
//   duplicates.push(value);
//  } else {
//   otherNumber.push(value);
//  }
// });

// // Result: [2, 3, 8]
// console.log("Duplicate values:", duplicates);
// // Result: [1, 4, 5, 2, 6, 3, 7, 8]
// console.log("Non-Duplicate values:", otherNumber);
