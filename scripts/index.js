let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-header").style.top = "0";
    document.getElementById("main-header").style.backgroundColor = "black";
  } else {
    document.getElementById("main-header").style.top = "-100px";
  }
  if (window.pageYOffset <= 1012) {
    document.getElementById("main-header").style.backgroundColor =
      "transparent";
    document.getElementById("main-header").style.transition = "ease-out 0.5s";
  }
  prevScrollpos = currentScrollPos;
};

const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.onclick = navToggle;

document.addEventListener("scroll", scrollPage);

let toggle = false;

function navToggle() {
  document.getElementById("shop").style.display = "none";
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
  toggle = !toggle;
  console.log(toggle);
  if (toggle == false) {
    document.getElementById("shop").style.display = "block";
  }
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = 0;
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / 100;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 10);
      } else {
        count.innerText = target;
      }
    };
    updateCount();
  });
}

function reset() {
  counters.forEach((counter) => {
    counter.innerText = 0;
  });
}
