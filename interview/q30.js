{/* <a href="../some.html">链接1</a>
<a href="/home/aside/search.html">链接2</a>
<a href="./docs/yuewen.pdf">链接1</a>
<img src="../icon-a.svg">
<img src="/image/icon-a.png"></img> */}

document.querySelectorAll('a', 'img').forEach(ele => {
  if (ele.href) {
    ele.href = 'xxxx'
  } else if (ele.src) {
    ele.src = 'xxx'
  }
})