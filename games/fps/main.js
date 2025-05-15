//<!-- games/fps/main.js（360度ターゲットゲーム） -->
export function init() {
  document.body.innerHTML = `
    <h1>360度ターゲット</h1>
    <p>出現したターゲットを即座にタップ！</p>
    <div id="target" style="width:50px;height:50px;position:absolute;background:red;border-radius:50%;"></div>
    <p id="msg"></p>
    <button id="stop">ゲーム終了</button>
  `;

  document.getElementById("stop").onclick = () => location.href = "../";
  const target = document.getElementById("target");
  const msg = document.getElementById("msg");

  function moveTarget() {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
  }

  target.onclick = () => {
    msg.textContent = "ヒット！";
    setTimeout(() => {
      msg.textContent = "";
      moveTarget();
    }, 1000);
  };

  moveTarget();
  setInterval(moveTarget, 3000);
}
