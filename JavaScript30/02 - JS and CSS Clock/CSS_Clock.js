//立即函式 IIFE 就不能用setClock() 因為被包起來了沒有辦法呼叫
(function () {
    const second = document.querySelector('.second-hand')
    const min = document.querySelector('.min-hand')
    const hour = document.querySelector('.hour-hand')

    function setClock() {
      const date = new Date()
      //一圈360度 60秒一圈就是6度一秒
      let secondeg = date.getSeconds() * 6 //(360/60)
      let mindeg = date.getMinutes() * 6 + (date.getSeconds() * 6 / 60)//(360/60)
      let hourdeg = date.getHours() * 30 + (date.getMinutes() * 30 / 60)//(360/12)

      second.style.transform = `rotate(${secondeg}deg)`
      min.style.transform = `rotate(${mindeg}deg)`
      hour.style.transform = `rotate(${hourdeg}deg)`

    }

    setClock()//初始化畫面
    //有很多種寫法如下:
    //計時器setInterval、setTimeout、requestAnimationFrame
    setInterval(setClock, 1000)
    //setTimeout(timeouthandler, 1000)
    //window.requestAnimationFrame(Animationhandler);

    //setTimeout通常需要自己呼叫自己, 概念比較像延遲設定間隔
    /*function timeouthandler() {
      setClock()
      setTimeout(timeouthandler, 1000);
    }*/

    //requestAnimationFrame 通知瀏覽器要產生動畫,處理畫面更新的setTimeout,一樣需要呼叫下一次
    /*function Animationhandler() {
      setClock()
      window.requestAnimationFrame(Animationhandler);}*/

  })()