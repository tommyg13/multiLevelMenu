$(document).ready(function() {
  // hide menu and levels when document is ready
  $(".menu, .level").hide();
  // toggle menu visibility when button clicked and change it to an X
  $(".show").on("click", function() {
    $(this).toggleClass("change");
    $(".dropMenu").toggle("easeInBounce");
  });

  $(window).resize(function() {
    if ($(this).width() >= 1020) {
      $(".dropMenu").show();
    }
  });

  $(".dropAnchor").on("click", function() {
    var thisMenu = $(this).parent().find(".menu");
    // toggle visibility of menu when an nav anchor get clicked
    thisMenu.toggle("swing");
    // hide all others menu
    $(".menu, .level, .level1").not(thisMenu).hide("swing");
  });

  $(".menuLink").on("click", function() {
    var level1 = $(this).next(".level1");
     // toggle visibility of level1 when an menu anchor get clicked
    level1.toggle("swing");
    // hide all others menu
    $(this).parent().find(".level1, .level").not(level1).hide("swing");
  });
  $(".level1Link, .level a").on("click", function() {
    var level = $(this).next(".level");
    // toggle visibility of levels when an level 1 anchor get clicked
    level.toggle("swing");
     // hide all others menu
    $(this).parent().parent().find(".level").not(level).hide();
  });
});
