//<!-- games/reaction/main.js（反射速度ゲーム） -->
export function init() {
  document.body.innerHTML = `
    <h1>反射速度ゲーム</h1>
    <p>画面が緑に変わったらすぐにタップ！</p>
    <div id="area" style="width:100%;height:300px;background:#ddd;"></div>
    <p id="result"></p>
    <button id="stop">ゲーム終了</button>
  `;

  document.getElementById("stop").onclick = () => location.href = "../";
  const area = document.getElementById("area");
  const result = document.getElementById("result");

  function startRound() {
    result.textContent = "";
    area.style.background = "#ddd";
    let startTime = 0;
    const timeout = setTimeout(() => {
      area.style.background = "#0f0";
      startTime = Date.now();
    }, 2000 + Math.random() * 3000);

    area.onclick = () => {
      if (startTime === 0) {
        clearTimeout(timeout);
        result.textContent = "フライング！やり直し";
        setTimeout(startRound, 2000);
      } else {
        const reactionTime = Date.now() - startTime;
        result.textContent = `反応速度: ${reactionTime}ms`;
        setTimeout(startRound, 2000);
      }
    };
  }

  startRound();
}
