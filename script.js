let notes = document.querySelectorAll(".round");
let danke = document.querySelector(".res");
let rate = "";
let btn = document.querySelector(".btn");
let card = document.querySelector(".card");
let card2 = document.querySelector(".card2");

notes.forEach((note) => {
  note.addEventListener("click", function () {
    notes.forEach((note) => note.classList.remove("clicked"));
    this.classList.add("clicked");
    return (rate = this.value);
  });
  return rate;
});

btn.addEventListener("click", function () {
  let res = document.createElement("span");
  res.innerHTML = `You selected ${rate} out of 5`;
  danke.appendChild(res);
  card.classList.toggle("visible");
  card2.classList.toggle("visible");
});
