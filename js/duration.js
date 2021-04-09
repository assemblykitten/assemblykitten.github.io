// 2020-05-28 18:08:08
// 2020-12-25 06:08:08
var grt = new Date(2020, 11, 25, 6, 8, 8) /** 此处是计时的起始时间 **/
var timeDate = document.querySelector('#timeDate')
var times = document.querySelector('#times')

const update = () => {
  var now = new Date()
  now.setTime(now.getTime() + 250)
  days = (now - grt) / 1000 / 60 / 60 / 24
  dnum = Math.floor(days)
  hours = (now - grt) / 1000 / 60 / 60 - 24 * dnum
  hnum = Math.floor(hours)
  if (String(hnum).length === 1) {
    hnum = '0' + hnum
  }
  minutes = (now - grt) / 1000 / 60 - 24 * 60 * dnum - 60 * hnum
  mnum = Math.floor(minutes)
  if (String(mnum).length === 1) {
    mnum = '0' + mnum
  }
  seconds =
    (now - grt) / 1000 - 24 * 60 * 60 * dnum - 60 * 60 * hnum - 60 * mnum
  snum = Math.round(seconds)
  if (String(snum).length === 1) {
    snum = '0' + snum
  }
  timeDate.innerHTML = '本站安全运行&nbsp' + dnum + '&nbsp天'
  times.innerHTML =
    hnum + '&nbsp小时&nbsp' + mnum + '&nbsp分&nbsp' + snum + '&nbsp秒'
}

update()

setInterval(update, 1000)
