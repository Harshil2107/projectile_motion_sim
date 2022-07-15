var id = null;
function getInfo() {
  let ele = document.querySelector('input[name="gravity"]:checked').value;
  var elem = document.getElementById("dot");
  const max_x = window.innerWidth - 50;
  const max_y = 750;

  var x = 0,
    y = 0,
    g = 0,
    t = 0;
  let u = document.getElementById("vel").value;
  let deg = document.getElementById("deg").value;
  if (ele == -1) {
    g = document.getElementById("custom").value;
  } else {
    g = ele;
  }

  elem.style.bottom = y + "px";
  elem.style.left = x + "px";
  let radians = (deg * Math.PI) / 180;
  let T = (2 * u * Math.sin(radians)) / g;
  let R = u * Math.cos(radians) * T;
  let H = (Math.pow(u, 2) * Math.pow(Math.sin(radians), 2)) / (2 * g);
  document.getElementById("r").textContent = "Horizontal Distance: " + R + "m";
  document.getElementById("t").textContent = "Time of flight: " + T + "s";
  document.getElementById("h").textContent = "Max height: " + H + "m";

  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (t >= T || x >= max_x || y >= max_y) {
      clearInterval(id);
    } else {
      t += 1 / 100;
      x += (u * Math.cos(radians)) / 100;
      y =
        x * Math.tan(radians) -
        0.5 * g * Math.pow(x / (u * Math.cos(radians)), 2);
      elem.style.bottom = y + "px";
      elem.style.left = x + "px";
    }
  }
}
