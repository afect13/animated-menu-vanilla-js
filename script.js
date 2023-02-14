const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const navOne = document.getElementById("nav-1");
const navTwo = document.getElementById("nav-2");
const navThree = document.getElementById("nav-3");
const navFour = document.getElementById("nav-4");

const navArr = [navOne, navTwo, navThree, navFour];

function replaceNavClass(arg1, arg2) {
  navArr.forEach((n, i) => {
    n.classList.replace(`slide-${arg1}-${i + 1}`, `slide-${arg2}-${i + 1}`);
  });
}

function toggleNav() {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-rigth");
    replaceNavClass("out", "in");
    // slide
    // navOne.classList.remove("slide-out-1");
    // navOne.classList.add("slide-in-1");
    // navTwo.classList.remove("slide-out-2");
    // navTwo.classList.add("slide-in-2");
    // navThree.classList.remove("slide-out-3");
    // navThree.classList.add("slide-in-3");
    // navFour.classList.remove("slide-out-4");
    // navFour.classList.add("slide-in-4");
  } else {
    overlay.classList.replace("overlay-slide-rigth", "overlay-slide-left");
    replaceNavClass("in", "out");
    // slide
    // navOne.classList.remove("slide-in-1");
    // navOne.classList.add("slide-out-1");
    // navTwo.classList.remove("slide-in-2");
    // navTwo.classList.add("slide-out-2");
    // navThree.classList.remove("slide-in-3");
    // navThree.classList.add("slide-out-3");
    // navFour.classList.remove("slide-in-4");
    // navFour.classList.add("slide-out-4");
  }
}

menuBars.addEventListener("click", toggleNav);
// navOne.addEventListener("click", toggleNav);
// navTwo.addEventListener("click", toggleNav);
// navThree.addEventListener("click", toggleNav);
// navFour.addEventListener("click", toggleNav);
navArr.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
