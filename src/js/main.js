(function($){
	"use strict";
	jQuery(document).on('ready', function () {

  var body = $("body"),
      loader = $("#preloader"),
      header = "site-header-open",
      pageCover = $("#page-cover"),
      bg = $(".overlay-inner-holder"),
      navToggle = $("#navigation-toggle"),
      navLinks = $("#navigation li a"),
      examples = $("#portfolio-examples"),
      rotatingText = $("#js-rotating, #js-rotating2"),
      sliders = $("#portfolio-core, #portfolio-cupcake, #portfolio-sprinkles, #portfolio-docs, #designs");

      rotatingText.Morphext({
        animation: "flipInX"
      });

      sliders.slick({
        dots: true,
        speed: 1500,
        fade: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        cssEase: 'linear'
      });

      examples.slick({
        dots: true,
        speed: 1500,
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });

      navLinks.on('click', function(e){
        $('.active').removeClass('active');

        $(this).addClass('active');

        $('html, body').stop().animate({
          scrollTop: $($(this).attr('href')).offset().top - 0
        }, 1200);
        e.preventDefault();
      });

      $('.venobox').venobox();


      // Hide Side Menu clicking on body mobile
			body.on("click", ".site-header-overlay", function () {
				body.hasClass(header) && navToggle.hasClass("open") && navToggle.trigger("click")
      }),

      // Hide Side Menu
      navToggle.on('click', navToggle, function() {
        $(this).hasClass("open") ? ($(this).removeClass("open"),
        body.removeClass(header)) : ($(this).addClass("open"),
        body.addClass(header))
      });

      if (0 < pageCover.length) {
        var height = Math.max($("#page-cover .page-cover-wrap").height(),
            $("#page-cover .page-cover-wrap").innerHeight()),
            offset = (pageCover.offset().top, $("#page-cover section .container")),
            s = 0;

        pageCover.css("height", height), $(window).on("scroll", function () {
          var scroll = $(window).scrollTop();

          if (scroll < height) {
            var t = (100 - 100 * scroll / height) / 100;
            offset.css("opacity", t), s < scroll ? "up" : "down", s = scroll
          }
        })
      }

			if (bg.length && bg.each(function () {
				var bg = $(this).children("img").attr("src");
				    $(this).css("background-image", "url(" + bg + ")").children("img").hide()
        }))

      $(window).on("load", function () {
      	loader.delay(1200).fadeOut(500)
      });

      // Preloader
      $(window).on('load', function() {
          $('.preloader').fadeOut();
        $('.preloader-area').addClass('preloader-deactivate');
      });
	});
}(jQuery));
