class AnimateScroll {
  constructor(element, link) {
    this.element = element;
    this.link = link;
    this.addScroll();
  }

  addScroll() {
    this.element.addEventListener('click', () => {
      $(`${this.link}`).animatescroll();
    });
  }
}

const callToAction = document.querySelectorAll("#to-action");
const problemStatement = document.querySelectorAll(".problem");
const about = document.querySelectorAll("#go-about");
const goHome = document.querySelector("#go-home");

Array.from(callToAction).map(item => {
  new AnimateScroll(item, '#call-to-action');
});

Array.from(problemStatement).map(item => {
  new AnimateScroll(item, '#problem');
});

new AnimateScroll(goHome, '#home');

Array.from(about).map(item => {
  new AnimateScroll(item, '#about');
});
