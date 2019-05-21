const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  if (nav.style.display === "block") {
    nav.style.display = "none";
    return;
  }

  nav.style.display = "block";
});
