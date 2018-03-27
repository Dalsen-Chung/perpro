//装饰者模式 ： 在原有的对象放上进行装饰，核心方法是通过对原有的对象方法进行缓存，在添加
//新的方法时先调用原有的方法保证原有方法不受影响。

let decorator = function (dom, type, callback) {   //对监听事件的装饰 以DOM2级为案例
  let element = typeof dom === 'string' ? document.querySelector(dom) : dom;
  if ( typeof element[type] === 'function' ){
    let oldFn = element[type];
    element[type] = function () {
      oldFn();
      callback();
    }
  }else{
    element[type]  = callback;
  }
}

let btn = document.querySelector('#btn');    // eg : 为btn的点击事件添加新的功能
btn.onclick = function() {
  console.log('old!');
}

decorator('#btn','onclick',function(){
  console.log('hahahah');
});
