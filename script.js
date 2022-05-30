var dropDown = document.getElementById('dropdown');
var btnclose = document.getElementById('btnclose');
var SideNav = document.getElementById("mySidenav");
var overlay = document.getElementById("overlay");
var header = document.getElementsByTagName('header');
var nav = document.getElementById("nav");
// cuando el usuario baja 20px del top del documento se aplica el cambio
window.onscroll = function () {
  scrollFunction();
};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav.style.background = "#000000";
    nav.style.height = "50px";
  } else {
    nav.style.background = "linear-gradient(#000000, rgb(0, 0, 0, 0))";
    nav.style.height = "60px";
  }
}



/* Set the width of the side navigation to 250px */
function openNav() {
  SideNav.style.width = "250px";
  overlay.style.width = "100vw";
}
function overlayClose(){
 
  
}
/* Set the width of the side navigation to 0 */
function closeNav() { 
  overlay.addEventListener('click', function(){
    SideNav.style.width = "0";
    overlay.style.width = "0";
  })
}