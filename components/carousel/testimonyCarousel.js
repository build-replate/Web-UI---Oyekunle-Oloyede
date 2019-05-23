class Carousel {
  constructor(cardElement) {
    this.cardElement = cardElement;
    this.leftButton = document.querySelector(".left-button");
    this.rightButton = document.querySelector(".right-button");

    this.currentCardIndex = 1;

    this.rightButtonHandler();
    this.leftButtonHandler();
  }

  rightButtonHandler() {
    this.rightButton.addEventListener("click", () => {
      if (this.currentCardIndex === cardArray.length) this.currentCardIndex = 0;

      this.currentCardIndex++;
      cardArray[this.currentCardIndex - 1].showImage();
    });
  }

  leftButtonHandler() {
    this.leftButton.addEventListener("click", () => {
      if (this.currentCardIndex === 1) {
        this.currentCardIndex = cardArray.length;
        cardArray[this.currentCardIndex - 1].showImage();
        return;
      }

      this.currentCardIndex--;
      cardArray[this.currentCardIndex - 1].showImage();
    });
  }

  showImage() {
    cards.forEach(img => img.classList.remove("show"));
    this.cardElement.classList.add("show");
  }
}

const testimonies = document.querySelector(".testimonies");

// displays the first card
document.querySelector(".testimony").classList.add("show");

const cards = testimonies.querySelectorAll(".testimony");
const cardArray = Array.from(cards).map(card => new Carousel(card));
