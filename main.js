// navbar color change
window.addEventListener('scroll', function(){
  var header = document.querySelector("nav");
  header.classList.toggle('sticky', window.scrollY > 0);
});
// navbar color change END

// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});
// Smooth Scroll END


// toggle Menu
function toggleMenu(){
  const menuToggle = document.querySelector(".toggle");
  const sidebar = document.querySelector(".sidebar");
  menuToggle.classList.toggle("active");
  sidebar.classList.toggle("active");
}
// toggle menu END


// cookie consent popup
const cookieContainer = document.querySelector('.cookie-container');
const cookieBtn = document.querySelector(".cookie-button");

cookieBtn.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("MayraVideographyCookie", "true");
});

setTimeout( () => {
  if(!localStorage.getItem("MayraVideographyCookie")){
    cookieContainer.classList.add("active");
  }
}, 2000);
// cookie consent popup END
