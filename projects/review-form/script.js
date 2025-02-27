// revew satr count
const reviewForm = document.querySelector(".review-form");
const stars = reviewForm.querySelectorAll(".stars i");
let ratingNumber;
function activeStar(activeNumber) {
  stars.forEach((s, sIndex) => {
    s.classList.toggle("active", sIndex < activeNumber);
  });
}
stars.forEach((star, index) => {
  star.addEventListener("mouseover", function () {
    let rating = this.getAttribute("data-rating");
    activeStar(rating);
  });
  star.addEventListener("click", function () {
    ratingNumber = this.getAttribute("data-rating");
    activeStar(ratingNumber);
  });
  star.addEventListener("mouseout", function () {
    activeStar(ratingNumber);
  });
});

// form submit
const button = document.getElementById("submit");
button.addEventListener("click", function (event) {
  event.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");

  const review = document.getElementById("review");
  const reviewItem = document.createElement("div");
  reviewItem.classList.add("review-item");
  reviewItem.innerHTML = `
    <h3>${name.value}</h3>
    <p>${email.value}</p>
    <div style="display:flex; gap:5px; font-size:20px; color:yellow">${
      "★".repeat(ratingNumber) + "☆".repeat(5 - ratingNumber)
    }</div>
    <p>${review.value}</p>
  `;
  document.querySelector(".reviews").appendChild(reviewItem);
  name.value = null;
  email.value = null;
  review.value = null;
  ratingNumber = 0;
  activeStar(0);
});
