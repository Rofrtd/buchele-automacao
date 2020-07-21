$(function () {
  "use strict"; // Start of use strict

  /*====================================
			Mobile Menu JS
		======================================*/

  $(".menu").slicknav({
    prependTo: ".mobile-menu",
    duration: 600,
    closeOnClick: true,
  });
  /*--------------------------
    scrollUp
    ---------------------------- */
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade",
  });
  /*------------------------------------------------------------------
        Year
    ------------------------------------------------------------------*/
  $(function () {
    var theYear = new Date().getFullYear();
    $("#year").html(theYear);
  });

  /*---------------------------------------------------------------------
    Galeria Post Hove Effect for Caption Script
    ------------------------------------------------------------------------*/
  function gallery_hover() {
    if ($(".gallery-caption img").length) {
      $(".gallery-caption img").on("mouseover", function () {
        var img_width = $(".gallery-caption img").width();
        var img_height = $(".gallery-caption img").height();
        $(".gallery-caption .blur").css({
          height: img_height,
          width: img_width,
        });
      });
    }
  }
  gallery_hover();

  /*------------------------------------------------------------------
    Owl Carousel for Sobre Nós
	------------------------------------------------------------------*/
  var owl = $("#about");
  owl.owlCarousel({
    nav: true,
    margin: 10,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
      1400: {
        items: 1,
      },
      1600: {
        items: 1,
      },
    },
  });
  /*------------------------------------------------------------------
    Header Navigation
    ------------------------------------------------------------------*/
  if ($(window).width() > 767) {
    $("ul.navbar-nav li.dropdown").on(
      "hover",
      function () {
        $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(500);
      },
      function () {
        $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(500);
      }
    );
  }
});

/*------------------------------------------------------------------
 Loader 
------------------------------------------------------------------*/
jQuery(window).on("load scroll", function () {
  "use strict"; // Start of use strict
  // Loader
  $("#dvLoading").fadeOut("fast");
  // map zooming
  $(".google-map").on("click", function () {
    $(".google-map").find("iframe").css("pointer-events", "auto");
  });
  //Animation Numbers
  jQuery(".animateNumber").each(function () {
    var num = jQuery(this).attr("data-num");
    var top = jQuery(document).scrollTop() + jQuery(window).height();
    var pos_top = jQuery(this).offset().top;
    if (top > pos_top && !jQuery(this).hasClass("active")) {
      jQuery(this).addClass("active").animateNumber(
        {
          number: num,
        },
        2000
      );
    }
  });
});
/*------------------------------------------------------------------
    Perguntas Frequentes
    ------------------------------------------------------------------*/
// $(".panel-heading a").on("click", function () {
//   $(".panel-heading").removeClass("active");
//   $(this).parents(".panel-heading").addClass("active");
// });
