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
