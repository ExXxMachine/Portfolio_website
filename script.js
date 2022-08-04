document.ondragstart = noselect;
// запрещает перетаскивание
document.onselectstart = noselect;
// запрещает выделение элементов страницы

function noselect() {
  return false;
}
$(document).ready(function () {
  $(".language-button").click(function (event) {
    $(".language-button").toggleClass("active");
    $(".language-button").remove("active");
  });
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
