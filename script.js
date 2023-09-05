// scrolllink
var scrolllink = document.getElementById("scrolllink");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    scrolllink.style.display = "block";
  } else {
    scrolllink.style.display = "none";
  }
});

// ---------------------------------------------------------------------------------------------------

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

// Tıklanan link öğesini bulun
var link = document.getElementById("link");

// Gizli div'i bulun
var gizliDiv = document.getElementById("gizliDiv");

// Kapatma ikonunu bulun
var kapatIcon = document.getElementById("kapatIcon");

// Tıklama olayını dinleyin
link.addEventListener("click", function (e) {
  e.preventDefault(); // Sayfa yenilenmesini engellemek için gereken bir önlem
  // Gizli div'i görünür hale getirin
  gizliDiv.style.display = "block";
});

// Kapatma ikonuna tıklama olayını dinleyin
kapatIcon.addEventListener("click", function () {
  // Gizli div'i tekrar gizleyin
  gizliDiv.style.display = "none";
});

// ***************************

var link = document.getElementById("link");

// Gizli div'i bulun
var gizliDiv = document.getElementById("gizliDiv");

// Tıklama olayını dinleyin
link.addEventListener("click", function (e) {
  e.preventDefault(); // Sayfa yenilenmesini engellemek için gereken bir önlem
  // Gizli div'i görünür hale getirin
  gizliDiv.style.display = "block";
});

var link5 = document.getElementById("link-5");

// Gizli div'i bulun
var gizliDiv5 = document.getElementById("gizliDiv-5");

// Tıklama olayını dinleyin
link5.addEventListener("click", function (e) {
  e.preventDefault(); // Sayfa yenilenmesini engellemek için gereken bir önlem
  // Gizli div'i görünür hale getirin
  gizliDiv5.style.display = "block";
});

var link14 = document.getElementById("link-14");

// Gizli div'i bulun
var gizliDiv14 = document.getElementById("gizliDiv-14");

// Tıklama olayını dinleyin
link14.addEventListener("click", function (e) {
  e.preventDefault(); // Sayfa yenilenmesini engellemek için gereken bir önlem
  // Gizli div'i görünür hale getirin
  gizliDiv14.style.display = "block";
});
