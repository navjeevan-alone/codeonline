//Get the button
let scrollTopBtn = document.querySelector("#scroll-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    // scrollTopBtn.style.bottom = "5rem";
    scrollTopBtn.classList.add("active");
  } else {
    // scrollTopBtn.style.bottom = "-5rem";
    scrollTopBtn.classList.remove("active");
  }
};
scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
// When the user clicks on the button, scroll to the top of the document
// function topFunction() {}

// change theme
let themeChangeBtn = document.querySelector("#theme-changer");
let body = document.querySelector("body");
let currentTheme = "dark";
themeChangeBtn.addEventListener("click", () => {
  themeChangeBtn.classList.toggle("fa-moon");
  themeChangeBtn.classList.toggle("fa-sun");
  themeChangeBtn.classList.toggle("active");
  body.classList.toggle("dark-mode");

  // if ((currentTheme = "dark")) {
  //   themeChangeBtn.classList.remove("active");
  //   body.classList.remove("dark-mode");
  //   currentTheme = "light";
  // } else {
  //   themeChangeBtn.classList.add("active");
  //   body.classList.add("dark-mode");
  //   currentTheme = "dark";
  // }
});

// always input letters in input#name field
localStorage.setItem("personName", ["chetan"]);
localStorage.setItem("personEmail", ["email@gmail"]);
localStorage.setItem("personMessage", ["message"]);

let sendBtn = document.querySelector("#send-btn");
sendBtn.onclick = () => {
  let inpName = document.querySelector("#name");
  let inpEmail = document.querySelector("#email");
  let inpMessage = document.querySelector("#message");
  localStorage.setItem("personName", inpName.value);
  localStorage.setItem("personEmail", inpEmail.value);
  localStorage.setItem("personMessage", inpMessage.value);
};
// slider carasoul swiper js
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 5,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-navigation",
  },
  // loop: true,
});

// rippel button effect
const rippleBtn = document.querySelectorAll(".ripple-btn");
rippleBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});
