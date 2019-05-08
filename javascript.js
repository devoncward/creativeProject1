function printConsole() {
  console.log("test worked");
}
function movePingPongBall() {
  var element = document.getElementById("pingpongballelement");
  var height = 0;
  var length = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if(height == 350) {
      clearInterval(id);
    } else {
      height++;
      length++;
      element.style.top = height + 'px';
      element.style.left = length + 'px';
    }
  }
}
