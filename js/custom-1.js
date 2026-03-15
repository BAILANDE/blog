function runningTime() {

  const infoBox = document.querySelector('.site-info')
  if (!infoBox) return

  if (document.querySelector('.running-time')) return

  const div = document.createElement('div')
  div.className = 'running-time'
  infoBox.appendChild(div)

  const start = new Date('2024-01-01 00:00:00').getTime()

  function update() {

    const diff = Date.now() - start

    const d = Math.floor(diff / 86400000)
    const h = Math.floor(diff % 86400000 / 3600000)
    const m = Math.floor(diff % 3600000 / 60000)
    const s = Math.floor(diff % 60000 / 1000)

    div.innerHTML = `本站已运行 ${d} 天 ${h} 小时 ${m} 分 ${s} 秒`
  }

  update()
  setInterval(update,1000)
}

document.addEventListener("DOMContentLoaded", runningTime)
document.addEventListener("pjax:complete", runningTime)