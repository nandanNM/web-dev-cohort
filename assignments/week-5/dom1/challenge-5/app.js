const carouselTrack = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const carouselNav = document.getElementById("carouselNav");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

let currentIndex = 0;

images.forEach((image, index) => {
  const div = document.createElement("div");
  div.classList.add("carousel-slide");
  div.style.backgroundImage = `url(${image.url})`;
  carouselTrack.appendChild(div);

  const indicator = document.createElement("div");
  indicator.classList.add("carousel-indicator");
  if (index === 0) indicator.classList.add("active");
  indicator.addEventListener("click", () => {
    updateCarousel(index);
  });
  carouselNav.appendChild(indicator);
});

function updateCarousel(index) {
  const indicators = document.querySelectorAll(".carousel-indicator");
  if (index >= images.length) {
    currentIndex = 0;
  } else if (index <= 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex = index;
  }
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators.forEach((item, i) => {
    item.classList.toggle("active", i === currentIndex);
  });
  updateImageCaption();
}

function updateImageCaption() {
  caption.innerText = `${images[currentIndex].caption}`;
}

nextButton.addEventListener("click", () => {
  updateCarousel(currentIndex + 1);
  console.log(currentIndex);
});
prevButton.addEventListener("click", () => {
  updateCarousel(currentIndex - 1);
  console.log(currentIndex);
});

function timerPhoto() {
  let timerId = null;

  return () => {
    if (!timerId) {
      autoPlayButton.textContent = "Stop Auto Play";
      let countdown = 5;
      timerDisplay.innerText = `Next in: ${countdown}s`;
      timerId = setInterval(() => {
        countdown--;
        timerDisplay.innerText = `Next in: ${countdown}s`;
        if (countdown === 0) {
          updateCarousel(currentIndex + 1);
          countdown = 5;
        }
      }, 1000);
    } else {
      clearInterval(timerId);
      timerId = null;
      autoPlayButton.textContent = "Start Auto Play";
      timerDisplay.textContent = "";
    }
  };
}
autoPlayButton.addEventListener("click", () => {
  s();
});
const s = timerPhoto();
updateImageCaption();
