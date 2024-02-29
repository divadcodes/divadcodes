// Set the date we're counting down to (10 days from now)
var countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 10);

// Update the countdown every second
var x = setInterval(function() {
  // Get the current date and time
  var now = new Date().getTime();
  
  // Find the distance between now and the countdown date
  var distance = countDownDate.getTime() - now;
  
  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the countdown
  document.getElementById("countdown").innerHTML = "Time left: " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);