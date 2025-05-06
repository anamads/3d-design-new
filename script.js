/*var try = document.getElementsByClass('bold');

// Add a mouseover event listener
try.addEventListener('mouseover', () => {
  // Change the button's background color
  try.style.color = 'blue';
});
*/

const press = document.getElementById("jsbut");

let pressButton = function () {
  press.style.backgroundColor = "#000000";
  press.style.color = "#FFFFFF";
};

press.addEventListener("mousedown", pressButton);

const hamb = document.getElementById("hamburger-icon");
const burgerlong = document.querySelector(".hamburger");

let pressham = function (e) {
  console.log(e.target);
  hamb.style.display = "none";
  burgerlong.style.display = "flex";
  burgerlong.style.flexDirection = "column";
};
hamb.addEventListener("click", pressham);

const faqs = document.querySelectorAll(".faq");
for (const item of faqs) { 
  item.addEventListener('click', function() {
    item.classList.toggle('active')
  })
}

const close = document.getElementById("closeburger");
const closeFunction = () => {
  hamb.style.display = "block";
  burgerlong.style = "none";
};
close.addEventListener("click", closeFunction);

const done = document.getElementById("done");
done.addEventListener("click", closeFunction);

const redone = document.getElementById("redone");
redone.addEventListener("click", closeFunction);
