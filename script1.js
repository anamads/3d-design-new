const hamb = document.getElementById("hamburger-icon");
const burgerlong = document.querySelector(".hamburger");

let pressham = function (e) {
  console.log(e.target);
  hamb.style.display = "none";
  burgerlong.style.display = "flex";
  burgerlong.style.flexDirection = "column";
};
hamb.addEventListener("click", pressham);



const close = document.getElementById("closeburger");
const closeFunction = () => {
  hamb.style.display = "block";
  burgerlong.style = "none";
};
close.addEventListener("click", closeFunction);
