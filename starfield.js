//This is the starfield in the background

const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let stars = [];
let w, h;

function resize() {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  stars = Array.from({ length: 200 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2 + 1,
    s: Math.random() * 0.5 + 0.2
  }));
}

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();

    // move star downward
    star.y += star.s;
    if (star.y > h) {
      star.y = 0;
      star.x = Math.random() * w;
    }
  });

  requestAnimationFrame(draw);
}

window.addEventListener("resize", resize);
resize();
draw();
