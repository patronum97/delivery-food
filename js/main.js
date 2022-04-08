const cart = document.querySelector("#cart");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cart.addEventListener("click", toggleModal);

close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("active");
}
