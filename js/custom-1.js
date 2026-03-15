function runningTime(){

  const pv = document.querySelector("#busuanzi_value_site_pv");
  if(!pv) return;

  if(document.querySelector(".running-time")) return;

  const span = document.createElement("span");
  span.className = "running-time";

  pv.parentNode.appendChild(span);

  const start = new Date("2024-01-01 00:00:00").getTime();

  function update(){

    const diff = Date.now() - start;

    const d = Math.floor(diff/86400000);
    const h = Math.floor(diff%86400000/3600000);
    const m = Math.floor(diff%3600000/60000);
    const s = Math.floor(diff%60000/1000);

    span.innerHTML = ` | 本站已运行 ${d} 天 ${h} 小时 ${m} 分 ${s} 秒`;
  }

  update();
  setInterval(update,1000);
}

document.addEventListener("DOMContentLoaded", runningTime);
document.addEventListener("pjax:complete", runningTime);