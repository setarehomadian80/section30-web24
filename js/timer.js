 const h = document.querySelectorAll('h2')
    const btn = document.querySelectorAll('button')

    let ms = 0
    let s = 0
    let m = 0
    let x

    btn[0].addEventListener('click', (e) => {
      e.target.setAttribute('disabled', 'disabled')

      x = setInterval(() => {
        if (ms < 99) {
          ms++
          h[0].innerHTML = ms.toString().padStart(2, '0')
        } else {
          ms = 0
          if (s < 59) {
            s++
            h[1].innerHTML = s.toString().padStart(2, '0')
          } else {
            s = 0
            m++
            h[2].innerHTML = m.toString().padStart(2, '0')
          }
        }
      }, 10)
    })

    btn[1].addEventListener('click', (e) => {
      clearInterval(x)
      btn[0].removeAttribute('disabled')
    })

    btn[2].addEventListener('click', (e) => {
      console.log(' ms = ' + ms + ' s = ' + s + ' m = ' + m)
    })