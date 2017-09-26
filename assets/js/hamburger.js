$(document).ready(function() {

    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function() {
      $(".menu").slideToggle("slow", function() {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });

    $(".cross").click(function() {
      $(".menu").slideToggle("slow", function() {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });

});

$(".navbar-inverse .navbar-nav > ul > li > a").click(function() {
          $(".navbar-inverse .navbar-nav > ul > li > a").removeClass("active");
          $(this).addClass("active");
});
