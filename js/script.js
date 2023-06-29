$(document).ready(function() {
    // select the start button
    const $startButton = $("#start");
    // builds a jquery array-like object of the squares
    const $squares = $(".square");
    // selects span that wraps the points value
    const $points = $("#points");
    // select the timer
    const $timer = $("#timer");
  
    // listen for clicks on the start button
    $startButton.on("click", function() {
      // when clicked, call a function that selects a random square and turns the background green, and then continues to call that function every 3 seconds.
  
      // every 3000 ms, call the randomSquare() function
      let generateRandomSquare = setInterval(function() {
        randomSquare();
      }, 1000);
      
      setTimeout(function(){
        // Stops the squares from being generated
        clearInterval(generateRandomSquare);
        // Stops the timer from reducing
        clearInterval(timer);
        alert("GAME OVER");
      }, 60000);
  
      // Count down every second from 60 until "cleared"
      let timer = setInterval(function() {
        const newSecondInterval = parseInt($timer.text()) - 1;
        $timer.text(newSecondInterval);
      }, 1000);
    });
  
  
    // write a function that randomly selects a square and adds a class to turn the background green
    function randomSquare() {
      // selects a random element from an _array_
      const randomSquare = $squares[Math.floor(Math.random() * $squares.length)];
      $(randomSquare).addClass('green-bg');
  
      // remove `green-bg` after 3 seconds (event loop)
      setTimeout(function() {
        $(randomSquare).removeClass('green-bg');
      }, 950)
    }
  
    // Add event listener to our squares
    $squares.on("click", function(event) {
      // if a square is clicked and it has a green-bg class 
      if ($(event.target).hasClass("green-bg")) {
        // immediately remove that green-bg class
        $(event.target).removeClass("green-bg");
  
        // add one point to the scoreboard
        // pulls the current point value ($points.text())
        // converts it to an integer (parseInt)
        const newPointValue = parseInt($points.text()) + 1;
        $points.text(newPointValue);
      } else {
        console.log("no points for you")
      }
  
    })
  });