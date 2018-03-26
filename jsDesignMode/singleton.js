//单例模式 : 创建单一全局变量、只允许实例化一次该对象，节省资源

//1.无法修改的静态变量 , 只提供访问属性的方法，通过闭包实现。
let Config = (function(){
  let config = {
    a : '1',
    b : '2'
  };
  return {
    get : function (name) {
      return config[name] ? config[name] : null;
    }
  }
})();


//惰性单例
let LazySingle = (function(){
  let _instance = null;
  function single() {
    return {
      publicMethod : function () {},
      publicPropety : 'a'
    }
  }
  return function () {
    if ( !_instance){
      _instance = single();
    }
    return _instance;
  }
})();

console.log(LazySingle().publicPropety);
