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
