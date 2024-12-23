 function toggleMenu() {
  const burger = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.nav-menu');
  
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
}


// copyright year
const copyrightYear = document.getElementById("copyright");
if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}
/*
other way of copyright
document.write(new Date().getFullYear())
*/
