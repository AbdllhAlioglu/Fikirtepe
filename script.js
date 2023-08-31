//document.addEventListener(function () {
var scrolllink = document.getElementById("scrolllink");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 500) {
    scrolllink.style.display = "block";
  } else {
    scrolllink.style.display = "none";
  }
});
// });

const myCarousel = document.getElementById("carouselExampleIndicators");
const carouselIndicators = myCarousel.querySelectorAll(
  ".carousel-indicators button span"
);
let intervalID;

const carousel = new bootstrap.Carousel(myCarousel);

window.addEventListener("load", function () {
  fillCarouselIndicator(1);
});

myCarousel.addEventListener("slide.bs.carousel", function (e) {
  let index = e.to;
  fillCarouselIndicator(++index);
});

function fillCarouselIndicator(index) {
  let i = 0;
  for (const carouselIndicator of carouselIndicators) {
    carouselIndicator.style.width = 0;
  }
  clearInterval(intervalID);
  carousel.pause();
}

var $item = $(".carousel-item");
var $wHeight = $(window).height();
$item.eq(0).addClass("active");
$item.height($wHeight);
$item.addClass("full-screen");

$(".carousel img").each(function () {
  var $src = $(this).attr("src");
  var $color = $(this).attr("data-color");
  $(this)
    .parent()
    .css({
      "background-image": "url(" + $src + ")",
      "background-color": $color,
    });
  $(this).remove();
});

$(window).on("resize", function () {
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$(".carousel").carousel({
  interval: 6000,
  pause: "false",
});

// scroll
