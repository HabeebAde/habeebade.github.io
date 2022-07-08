// NAVBAR TOGGLE FOR SMALL SCREEN

const navSlide = () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle("nav-active");
  })
}

navSlide();