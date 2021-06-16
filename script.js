let searchSSclose = document.getElementById("mobile-search-close"),
  searchSS = document.getElementById("mobile-search"),
  form = document.getElementById("form-li"),
  mainNav = document.getElementById("main-nav"),
  input = document.getElementById("search-input"),
  inputClear = document.getElementById("input-clear"),
  service = document.getElementById("service"),
  serviceMenu = document.getElementById("service-menu"),
  mainNavUl = document.getElementById("main_nav_ul");

// Show Search box
searchSS.onclick = () => {
  searchSS.style.display = "none";
  searchSSclose.style.display = "block";
  form.style.display = "block";
  mainNav.style.marginTop = "3rem";
};

// Hide Search box
searchSSclose.onclick = () => {
  searchSS.style.display = "block";
  searchSSclose.style.display = "none";
  form.style.display = "none";
  mainNav.style.marginTop = "0";
};

// Track search field
input.onchange = () => {
  input.value == ""
    ? (inputClear.style.visibility = "hidden")
    : (inputClear.style.visibility = "visible");
};

// Clear search field
inputClear.onclick = () => {
  input.value = "";
  input.focus();
};

// Nav overflow
const isOverflown = ({ clientWidth, scrollWidth }) => {
  return scrollWidth > clientWidth;
};

// Service menu
service.onclick = () => {
  serviceMenu.classList.toggle("show");
  serviceMenu.classList.toggle("hide");
};

// Scroll nav(horizontal)
if (mainNavUl.scrollWidth > mainNavUl.offsetWidth) {
  let paddle = document.getElementById("paddle");
  paddle.onclick = () => {
    mainNavUl.scrollLeft += 30;
  };
}
