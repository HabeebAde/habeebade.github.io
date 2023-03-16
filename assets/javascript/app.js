

/*

// NAVIGATION BTN TOGGLE
const navToggle = () => {
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = document.querySelector(".menu-icon");
  
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle("show-links");
    })
  }
  
navToggle();

*/

// NAVIGATION BTN TOGGLE
function barsClose(iconClose) {
  const navLinks = document.querySelector(".nav-links");
  iconClose.classList.toggle("fa-times");

  navLinks.classList.toggle("show-links");
}



// On Page Smooth Scrolling

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
          scrollTop: $(hash).offset().top
      }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
      });
      } // End if
  });
});


// Scroll To Top Button

//Get the button:
scrollBtn = document.getElementById("scrollupBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
