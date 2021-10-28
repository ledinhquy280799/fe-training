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
  function Counter(selector) {
    var self = this;
    
    //get all props from element
    this.elem = document.querySelector(selector);
    this.from = parseInt(this.elem.getAttribute('data-from') || 100);
    this.to = parseInt(this.elem.getAttribute('data-to') || 1000);
    this.refreshInterval = parseInt(this.elem.getAttribute('data-refresh-interval') || 50);
    this.speed = parseInt(this.elem.getAttribute('data-speed') || 5000);
    
    //start counter
    //if restart(int) is provided
    //restart counter after finishing with timeout
    this.start = function(restart) {
      //base logic, can be improved
      var diff = self.to - self.from;
      var steps = self.speed / self.refreshInterval;
      var step = diff / steps;
      var i = 1;
      var interval = setInterval(function() {
        var change = step * i;
        if (change <= self.to) {
          self.elem.textContent = Math.round(change);
          i++;
        } else {
          self.elem.textContent = Math.round(self.to)
          clearInterval(interval);
          //try to restart counter
          if(restart && restart > 0){
            setTimeout(function(){
              self.start(restart);
            }, restart);
          }
        }
      }, self.refreshInterval);
    }
  }

  //example2
  var counter1 = new Counter('#counter-projects');
  //dont restart
  counter1.start(0);

  //example2
  var counter2 = new Counter('#counter-clients');
  //dont restart
  counter2.start(0);

  //example2
  var counter3 = new Counter('#counter-coffes');
  //dont restart
  counter3.start(0);

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
  if (winWidth >= 850) {
    $(".project").height(winWidth*.25);
  } else {
    $(".project").height(winWidth*.5);
  }
});