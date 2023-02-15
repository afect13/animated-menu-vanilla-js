const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const navOne = document.getElementById("nav-1");
const navTwo = document.getElementById("nav-2");
const navThree = document.getElementById("nav-3");
const navFour = document.getElementById("nav-4");
const sectSpring = document.getElementById("spring");
const sectSummer = document.getElementById("summer");
const sectAutumn = document.getElementById("autumn");
const sectWinter = document.getElementById("winter");
const ancorLinks = document.querySelectorAll('a[href^="#"]');

const secArr = [sectSpring, sectSummer, sectAutumn, sectWinter];
const navArr = [navOne, navTwo, navThree, navFour];

function replaceNavClass(arg1, arg2) {
  navArr.forEach((n, i) => {
    n.classList.replace(`slide-${arg1}-${i + 1}`, `slide-${arg2}-${i + 1}`);
  });
}
function replaceSectionClass(arg) {
  secArr.forEach((s) => {
    s.classList.replace(s.className, `section-slide-${arg}`);
  });
}

function toggleOverlayOpacity() {
  if (menuBars.classList.contains("change")) {
    overlay.style.opacity = "1";
  } else {
    overlay.style.opacity = "0";
  }
}

function toggleNav() {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-rigth", "overlay-slide-left");
    toggleOverlayOpacity();
    replaceSectionClass("left");
    replaceNavClass("out", "in");
  } else {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-rigth");
    setTimeout(toggleOverlayOpacity, 1600);
    replaceSectionClass("rigth");
    replaceNavClass("in", "out");
  }
}
menuBars.addEventListener("click", toggleNav);


navArr.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});

// smooth scroll

ancorLinks.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();
    const id = e.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
