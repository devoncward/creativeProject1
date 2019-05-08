window.onload = function() {
  movePingPongBall();
};
function printConsole() {
  console.log("test worked");
}
function movePingPongBall() {
  console.log("ping pong ball should move now");
  var element = document.getElementById("dot");
  var height = 200;
  var length = 500;
  var counter = 0;
  var moveUp = -1;
  var moveAcross = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if(counter == 10000) {
      clearInterval(id);
    } else {
      if(height == 250 || height == 200) {
        moveUp *= -1;
      }
      if(length == 1700 || length == 500) {
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
