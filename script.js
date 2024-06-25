"use strict";

(function ($) {
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    $(".gallery-controls ul li").on("click", function () {
      $(".gallery-controls ul li").removeClass("active");
      $(this).addClass("active");
    });
    if ($(".gallery-filter").length > 0) {
      var containerEl = document.querySelector(".gallery-filter");
      var mixer = mixitup(containerEl);
    }

    $(".blog-gird").masonry({
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
    });
  });

  

  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  $(".header-section .nav-menu .mainmenu ul li").on("mousehover", function () {
    $(this).addClass("active");
  });
  $(".header-section .nav-menu .mainmenu ul li").on("mouseleave", function () {
    $(".header-section .nav-menu .mainmenu ul li").removeClass("active");
  });

  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  $(".image-popup").magnificPopup({
    type: "image",
  });

  $(".show-result-select").niceSelect();

  /*------------------
       Timetable Filter
    --------------------*/
    $(document).ready(function () {
       
        showAllClasses();
    
        $(".timetables-controls ul li").on("click", function () {
            var tsfilter = $(this).data("tsfilter");
            
          
            $(".timetables-controls ul li").removeClass("active");
            $(this).addClass("active");
    
          
            if (tsfilter == "all") {
                showAllClasses();
            } else {
                filterClasses(tsfilter);
            }
        });
    
        function showAllClasses() {
            $(".classtime-table").removeClass("filtering");
            $(".ts-item").addClass("show").css("opacity", "1");
        }
    
        function filterClasses(filter) {
            $(".classtime-table").addClass("filtering");
            $(".ts-item").removeClass("show").css("opacity", "0");
            $(".ts-item[data-tsmeta='" + filter + "']").addClass("show").css("opacity", "1");
        }
    });
    
    

  // AOS ANIMATION
  AOS.init({
    disable: "mobile",
    duration: 800,
    anchorPlacement: "center-bottom",
  });

  // SMOOTHSCROLL NAVBAR
  $(function () {
    $(".navbar a, .hero-text a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });
})(jQuery);