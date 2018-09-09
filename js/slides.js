$(function () {
      $("#novedades").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
		manualControls: "#lista",
        speed: 500,
		maxwidth: 300,
        namespace: "slides"
      });
    });