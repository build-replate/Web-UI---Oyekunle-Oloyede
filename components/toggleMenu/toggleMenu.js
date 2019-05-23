class ToggleMenu {
  constructor(element) {
    this.element = element;
    this.addToggle();
  }

  addToggle() {
    const nav = document.querySelector("nav");
    this.element.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
}

const hamburger = document.querySelector(".hamburger");

// instantiate the class
(() => new ToggleMenu(hamburger))();
