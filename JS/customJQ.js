$(document).ready(function() {
  if (
    $("#total")
      .children("div.tar")
      .hasClass("abc")
  ) {
    $("#murga").css("display", "none");
  }
  setInterval(() => {
    $("#eyeDef").css("display", "none");
    setTimeout(() => {
      $("#eyeDef").css("display", "block");
    }, 1000);
  }, 1500);
  $(".explore").click(function() {
    console.log("ok");
    if (window.innerHeight > window.innerWidth) {
      alert("Please use Landscape! for proper functioning");
    }
    setTimeout(() => {
      $("#total").addClass("container-fluid homeLand m-0 p-0 magic");
      $("#murga").css("display", "block");
      setTimeout(() => {
        $("#m1").css("display", "block");
      }, 1000);
      setTimeout(() => {
        $("#m2").css("display", "block");
      }, 3000);
      setTimeout(() => {
        $("#m3").css("display", "block");
      }, 6000);
      setTimeout(() => {
        $("#m4").css("display", "block");
      }, 10000);
      setTimeout(() => {
        $("#m5").css("display", "block");
      }, 13000);
    }, 3500);
  });

  $(".explore").click(function() {
    console.log("ok");
    $(".leftWall").css("transition", "transform 2s");
    $(".leftWall").css("transform", "translateX(-100%)");
    $(".rightWall").css("transition", "transform 2s");
    $(".rightWall").css("transform", "translateX(100%)");
    $(".explore").css("display", "none");
    $(".landingAbout").css("display", "none");
    $(".svg").css("display", "none");
  });
  $(".explore").hover(
    function() {
      $(".Text").css("transform", "scale(1.03)");
      $(".window").css("fill", "yellow");
      $(".light").css("display", "block");
      $(".Text").css("text-shadow", "0px 20px 5px #ffff004d");
    },
    function() {
      $(".Text").css("transform", "scale(1.0)");
      $(".window").css("fill", "none");
      $(".light").css("display", "none");
      $(".Text").css("text-shadow", "0px 20px 5px #030301");
    }
  );
});
