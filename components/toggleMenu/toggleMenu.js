class ToggleMenu {
  constructor(element) {
    this.element = element;
    this.addToggle();
  }

  addToggle() {
    const nav = document.querySelector("nav");
    this.element.addEventListener("click", () => {
      if (nav.style.display === "block") {
        nav.style.display = "none";
        return;
      }

      nav.style.display = "block";
    });
  }
}

const hamburger = document.querySelector(".hamburger");

(() => new ToggleMenu(hamburger))();
