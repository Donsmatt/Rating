function removeClass() {
  rate.forEach((r) => r.classList.remove("bg-orange"));
}

const rate = document.querySelectorAll("#rate");
rate.forEach((r) => r.addEventListener("click", selectRate));

function selectRate(e) {
  removeClass();

  this.classList.add("bg-orange");

  const button = document.getElementById("button");
  button.innerText = `You selected ${this.innerText} out of 5`;
}

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const hide = document.getElementById("hide");
  hide.classList.remove("hide");

  const show = document.getElementById("show");
  show.replaceWith(hide);
});
