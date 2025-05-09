const toggle = document.getElementById('menu-toggle');
const navList = document.querySelector('nav ul');
const body = document.body;
let lastScrollY = window.scrollY;
let lastScrollTop = 0;
const icons = document.querySelector(".icons");
const header = document.querySelector('.header');
const headerContent = document.querySelector('.header-content');

toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    if (scrollTop > lastScrollTop && scrollTop > 50) {
      icons.classList.add("hide");
    } else {
      icons.classList.remove("hide");
    }
  }

  if (window.scrollY > lastScrollY) {
    header.classList.add('hide-menu');
  } else {
    header.classList.remove('hide-menu');
  }
  lastScrollY = window.scrollY;
  lastScrollTop = scrollTop;
});

const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");
let currentIndex = 0;

function updateCarousel() {
  const width = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${width * currentIndex}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

