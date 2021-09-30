let btn = document.querySelector("#button");
let text_data_type = document.querySelector(".text--type");
let text_class = document.querySelector(".text--class");

btn.addEventListener('click', () => {
  text_data_type.textContent = btn.classList.value;
  text_class.textContent = btn.getAttribute("data-type");
});
