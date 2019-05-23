class AnimateScroll {
  constructor(element, link) {
    this.element = element;
    this.link = link;
    this.addScroll();
  }

  addScroll() {
    this.element.addEventListener("click", () => {
      $(`${this.link}`).animatescroll();
    });
  }
}

const solution = document.querySelectorAll("#solution");
const problemStatement = document.querySelectorAll(".problem");
const about = document.querySelectorAll("#go-about");
const goHome = document.querySelectorAll("#go-home");

Array.from(solution).map(item => {
  new AnimateScroll(item, "#the-solution");
});

Array.from(problemStatement).map(item => {
  new AnimateScroll(item, "#problem");
});

Array.from(goHome).map(item => {
  new AnimateScroll(item, "#home");
});

Array.from(about).map(item => {
  new AnimateScroll(item, "#about");
});
