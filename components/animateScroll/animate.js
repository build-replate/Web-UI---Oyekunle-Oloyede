const callToAction = document.querySelectorAll("#to-action");
const problemStatement = document.querySelectorAll(".problem");
const about = document.querySelectorAll("#go-about");
const goHome = document.querySelector("#go-home");

Array.from(callToAction).map(item => {
  item.addEventListener("click", () => {
    $("#call-to-action").animatescroll();

    //   history.pushState({
    //     id: 'call-to-action',
    //   }, 'Replate', 'http://127.0.0.1:5500/index.html/about');
  });
});

Array.from(problemStatement).map(item => {
  item.addEventListener("click", () => {
    $("#problem").animatescroll();
  });
});

goHome.addEventListener("click", () => {
  $("#home").animatescroll();
});

// window.addEventListener('load', () => {
//   location.href = 'https://google.com';
// })

Array.from(about).map(item => {
  item.addEventListener("click", () => {
    $("#about").animatescroll();
  });
});
