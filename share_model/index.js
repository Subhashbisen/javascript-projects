const modal = document.querySelector(".model");
const overlay = document.querySelector(".overlay");

//   Modal open function
function openModal() {
    console.log("modal is open");
    modal.classList.add("active")
    overlay.classList.add("overlayactive")
}

//   Modal close function
function closeModal() {
    console.log("modal is open");
    modal.classList.remove("active")
    overlay.classList.remove("overlayactive")
}