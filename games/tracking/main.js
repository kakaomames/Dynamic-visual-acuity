//<!-- games/tracking/main.js（追跡視力ゲーム） -->
export function init() {
  document.body.innerHTML = `
    <h1>追跡視力ゲーム</h1>
    <canvas id="canvas" width="300" height="300" style="border:1px solid #000;"></canvas>
    <p id="hit"></p>
    <button id="stop">ゲーム終了</button>
  `;

  document.getElementById("stop").onclick = () => location.href = "../";
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const hit = document.getElementById("hit");

  let x = 50, y = 50, dx = 2, dy = 2, r = 15;

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

    x += dx;
    y += dy;
    if (x + r > canvas.width || x - r < 0) dx *= -1;
    if (y + r > canvas.height || y - r < 0) dy *= -1;

    requestAnimationFrame(loop);
  }

  canvas.onclick = (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const dist = Math.hypot(mx - x, my - y);
    if (dist < r) hit.textContent = "命中！";
    else hit.textContent = "はずれ！";
  };

  loop();
}
