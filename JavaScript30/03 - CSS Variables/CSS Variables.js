; (function () {
  const inputs = document.querySelectorAll('.controls input')
  //發現不會及時改變需要再添加mousemove
  function changeHandler() {
    //第一種作法
    /* switch(this.name){
       case 'spacing':
       document.querySelector('img').style.padding=this.value +'px'
       break //如果不加break，代碼會從那開始執行，一直執行到最後，所以不符合case的那行也會被執行
       case 'blur':
       document.querySelector('img').style.filter=`blur(${this.value}px)`
       break
       case 'base':
       document.querySelector('img').style.background=this.value
       break*/
    //第二種
    const unix = this.dataset.sizing || '' //用dataset可以取出對象的data-*屬性
    document.querySelector('html').style.setProperty('--' + this.name,this.value + unix)
    //等同於style.cssPropertyName

  }



  inputs.forEach(function (input) {
  input.addEventListener('change', changeHandler)
  input.addEventListener('mousemove', changeHandler)
})

}) ()