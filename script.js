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

overlay.addEventListener('click', function(){
  SideNav.style.width = "0";
  overlay.style.width = "0";
})

/* Set the width of the side navigation to 250px */
function openNav() {
  SideNav.style.width = "330px";
  overlay.style.width = "100vw";
}
/* Set the width of the side navigation to 0 */
function closeNav() { 
    SideNav.style.width = "0";
    overlay.style.width = "0";
}

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();