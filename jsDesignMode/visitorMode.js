//访问者模式
let bindEvent = function (dom, type, fn, data) {
  if (dom.addEventListener){
    dom.addEventListener(type, fn, false);
  }else if (dom.attachEvent){                       //IE9以下
    dom.attachEvent('on' + type, function(){
      fn.call(dom, data);
    });
  }else {
    dom['on' + type] = fn;
  }
}

let btn = document.querySelector('#btn');
bindEvent(btn,'click',function(data){       //IE9以下
  console.log(data.msg);                     //数据与操作方法解耦
},{msg : 'btn!'});  //此处传递数据，上一行使用数据
