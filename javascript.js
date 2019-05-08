window.onload = function() {
  movePingPongBall();
};
function printConsole() {
  console.log("test worked");
}
function movePingPongBall() {
  console.log("ping pong ball should move now");
  var element = document.getElementById("dot");
  var height = 100;
  var length = 200;
  var counter = 0;
  var moveUp = -1;
  var moveAcross = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if(counter == 10000) {
      clearInterval(id);
    } else {
      if(height == 150 || height == 100) {
        moveUp *= -1;
      }
      if(length == 1400 || length == 200) {
        moveAcross *= -1;
      }
      if(moveUp == 1) {
        height++;
      } else {
        height--;
      }
      if(moveAcross == 1) {
        length--;
      } else {
        length++;
      }
      counter++;
      element.style.top = height + 'px';
      element.style.left = length + 'px';
    }
  }
}
