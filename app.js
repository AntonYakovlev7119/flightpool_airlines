const toggle_menu = document.querySelector(".toggle-menu");
const mobile_navbar = document.querySelector("aside.mobile-navigation");

const setVar = function () {
  mobile_navbar.style.cssText = `--x: ${document.body.clientWidth}px`;
};

setVar();

window.addEventListener("resize", setVar);

toggle_menu.addEventListener("click", () => {
  mobile_navbar.classList.toggle("active");
});
