//<!-- games/reaction/main.js（反射速度ゲーム） -->
export function init() {
  document.body.innerHTML = `
    <h1>反射速度ゲーム</h1>
    <p>画面が緑に変わったらすぐにタップ！</p>
    <div id="area" style="width:100%;height:300px;background:#ddd;"></div>
    <p id="result"></p>
  `;

  const area = document.getElementById("area");
  const result = document.getElementById("result");

  let startTime = 0;
  let timeout = setTimeout(() => {
    area.style.background = "#0f0";
    startTime = Date.now();
  }, 2000 + Math.random() * 3000);

  area.addEventListener("click", () => {
    if (startTime === 0) {
      clearTimeout(timeout);
      result.textContent = "フライング！やり直し";
    } else {
      const reactionTime = Date.now() - startTime;
      result.textContent = `反応速度: ${reactionTime}ms`;
    }
  });
}
