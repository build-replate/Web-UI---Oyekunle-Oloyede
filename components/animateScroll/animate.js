const callToAction = document.querySelectorAll("#to-action");
const problemStatement = document.querySelectorAll(".problem");
const goHome = document.querySelector("#go-home");

callToAction.forEach(item => {
  item.addEventListener("click", () => {
    $("#call-to-action").animatescroll();
  });
});

problemStatement.forEach(item => {
  item.addEventListener("click", () => {
    $("#problem").animatescroll();
  });
});

goHome.addEventListener("click", () => {
  $("#home").animatescroll();
});
