const hiddenNavElements = document.querySelectorAll(".hidden_nav_elements");
const toggleBtnNav = document.querySelector(".toggle-btn_nav-elements");

toggleBtnNav.addEventListener("click", toggleNav);
function toggleNav(e) {
  hiddenNavElements.forEach((el) => el.classList.toggle("hidden"));
}
