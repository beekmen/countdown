// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

// Set the date we're counting down to
var countDownDate = new Date('May 17 2017 UTC+0000').getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
  
  //Zeros
var days = (days.toLocaleString(undefined,{minimumIntegerDigits: 2}));  
  
var hours = (hours.toLocaleString(undefined,{minimumIntegerDigits: 2}));  
  
var minutes = (minutes.toLocaleString(undefined,{minimumIntegerDigits: 2}));
  
var seconds = (seconds.toLocaleString(undefined,{minimumIntegerDigits: 2}));
  
  // Display the result in the element with id="timer"
  document.getElementById("daysTicker").innerHTML = days;
  document.getElementById("hoursTicker").innerHTML = hours;
  document.getElementById("minsTicker").innerHTML = minutes;
  document.getElementById("secsTicker").innerHTML = seconds;
  
  // If the count down is finished, write some text 
  if (distance <=0) {
    clearInterval(x);
    document.getElementById("deadline").innerHTML = "IT'S TODAY!";
  }
}, 1000); 

function cycleImages() {
    var $active = $('#background_cycler .active');
    var $next = ($('#background_cycler .active').next().length > 0) ? $('#background_cycler .active').next() : $('#background_cycler img:first');
    $next.css('z-index', 2); //move the next image up the pile
    $active.fadeOut(1500, function() { //fade out the top image
        $active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
        $next.css('z-index', 3).addClass('active'); //make the next image the top one
    });
}

$(window).load(function() {
    $('#background_cycler').fadeIn(1500); //fade the background back in once all the images are loaded
    // run every 7s
    setInterval('cycleImages()', 10000);
})