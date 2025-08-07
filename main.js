 const demo = document.querySelector('.demo')
    const myArry = [
      "This typing effect uses slice() to simulate a real typewriter animation.",
      "It types the text letter by letter, then smartly deletes it.",
      "Built with setInterval and dynamic indexes — no external libraries needed!"
    ]

    let i = 1
    let k = 0
    let flag = 0

    const x = setInterval(() => {
      if (flag < myArry.length) {
        if (i < myArry[flag].length + 10) {
          demo.innerHTML = myArry[flag].slice(0, i)
          i++
          if (i == myArry[flag].length) {
            k = i
          }
        } else {
          if (k > 0) {
            k--
            demo.innerHTML = myArry[flag].slice(0, k)
          } else {
            flag++
            i = 0
          }
        }
      } else {
        flag = 0
        i = 0
      }
    }, 80)