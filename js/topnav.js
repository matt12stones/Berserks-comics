// JavaScript Document
window.onscroll = function() {estatica()};
var navbar = document.getElementById("navbar");
var off = navbar.offsetTop;

function estatica() {
  if (window.pageYOffset >= off) {
    navbar.classList.add("static");
  } else {
    navbar.classList.remove("static");
  }	
}
