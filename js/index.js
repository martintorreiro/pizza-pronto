//---------------poner en rojo secciones en navegador

const arrSections = [
  "home",
  "about",
  "menu",
  "gallery",
  "price",
  "team",
  "feedback",
  "contact",
];

function showRedNav(elem) {
  const elemTarget = document.getElementById(elem);
  if (
    elemTarget.offsetTop < window.scrollY + window.innerHeight / 2 &&
    elemTarget.offsetTop + elemTarget.offsetHeight >
      window.scrollY + window.innerHeight / 2
  ) {
    document.getElementById(`nav-${elemTarget.id}`).classList.add("red-nav");
  } else {
    document.getElementById(`nav-${elemTarget.id}`).classList.remove("red-nav");
  }
}

//---------------header----------------
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  if (scroll > 100) {
    $("header>nav").css("background-color", "white");
  } else {
    $("header>nav").css("background-color", "transparent");
  }
  if (scroll > 114) {
    $("#mobile-menu").addClass("fix");
  } else {
    $("#mobile-menu").removeClass("fix");
  }
  arrSections.map((el) => {
    showRedNav(el);
  });
});

$("#bars-menu").click(function () {
  $("#mobile-menu").toggleClass("mobile-menu--open");
});

//----------------carousel----------------

var owl = $(".owl-carousel.car1");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

var owl2 = $(".owl-carousel.car2").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 1,
  autoplay: false,
  dots: false,
});
//----------------gallery----------------

// gallery nav filter

$(".data-filter").click(function () {
  if (!$(this).hasClass("selected")) {
    $(".data-filter").removeClass("selected");
    $(this).addClass("selected");

    $(".images-container>li").addClass("disabled");
    $(".images-container>li." + $(this).data("filter")).removeClass("disabled");
  }
});

// images

$(".images-container>li").hover(function () {
  $(this).children(".lupa").toggleClass("disabled");
  $(this).children("img").toggleClass("opacity");
});

$(".lupa > i").click(function () {
  const order = $(this).parent().data("order");

  owl2.trigger("to.owl.carousel", [order, 0]);

  $(".carousel2-container").removeClass("disabled");
});

$(".carousel2-container .close").click(function () {
  $(".carousel2-container").addClass("disabled");
});

//----------------contact----------------

$("#contact-form").submit(function (e) {
  e.preventDefault();
  $("#submit-message").removeClass("disabled");
  $("#close-submit-message").click(function () {
    $("#submit-message").addClass("disabled");
  });
});

//----------------aos----------------

AOS.init();

//--------------------pruebas
