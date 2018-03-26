//装饰者模式 ： 在原有的对象放上进行装饰，核心方法是通过对原有的对象方法进行缓存，在添加
//新的方法时先调用原有的方法保证原有方法不受影响。

let decorator = function (dom, type, callback) {   //对监听事件的装饰 以DOM2级为案例
  let element = typeof dom === 'string' ? document.querySelector('#'+ dom) : dom;
  if ( typeof dom[type] === 'function' ){
    let oldFn = dom[type];
    dom[type] = function () {
      oldFn();
      callback();
    }
  }else{
    dom[type]  = callback;
  }
}
