$(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 10) {
        console.log("Window Scrolled");
        $(".navbar").css("background", "rgba(17, 43, 68)");
        // $("a.nav-link").css("color", "#fff");
    }else {
        console.log("Window Top")
        $(".navbar").css("background", "rgba(17, 43, 68, 0.5)");
        // $("a.nav-link").css("color", "#000");
      }
    })
  })
  