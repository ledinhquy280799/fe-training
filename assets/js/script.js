var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var count = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100 && count >= 100) {
        clearInterval(id);
        i = 0;
        document.getElementById("loader-wrapper").style.display = "none";
      } else {
        width++;
        count++;
        document.getElementById("percent").innerHTML = count + "%";
        elem.style.width = width + "%";
      }
    }
  }

}
$(window).on("load", move());
$('.owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10
});
$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".top-header").css("background-color", "#545454");
    } else {
      $(".top-header").css("background-color", "transparent");
    }
  });
  $('.open-responsive-menu').click(function() {
    $('.responsive-menu').toggleClass('active');
  });
});

$(window).resize(function(){
  winWidth = $(window).width();
  console.log(winWidth)
  if (winWidth >= 850) {
    $(".project").height(winWidth*.25);
  } else {
    $(".project").height(winWidth*.5);
  }
});