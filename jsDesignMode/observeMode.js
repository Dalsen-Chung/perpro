//观察者模式                  利用对象存储不同的事件类型，再利用数组根据事件类型存储具体事件，形成事件队列      *********** 不同开发人员实现功能模块解耦
let Observer = (function(){
  let _message = {};
  return{
    regist : function (type, fn) {                      //订阅事件
      if (typeof _message[type] === 'undefined'){
        _message[type] = [fn];
      }else{
        _message[type].push(fn);
      }
    },
    fire : function (type, args) {                        //发布事件
      if (typeof _message[type] === 'undefined'){
        return;
      }else{
        let len = _message[type].length;
        let i = 0;
        let events = {
          type : type,
          args : args || {}
        }
        for (;i < len ; i++){
          _message[type][i].call(this,events);
        }
      }
    },
    remove : function (type, fn) {                      //取消订阅事件
      if (_message[type] instanceof Array){
        let len = _message[type].length;
        let i = len - 1;
        for( ; i>=0; i--){
          _message[type][i] === fn && _message[type].splice(i, 1);
        }
      }
    }
  }
})();
function call (){
  console.log('I am calling Shirley');
}
Observer.regist('call',call);
Observer.regist('call',function(e){                //订阅事件
  console.log('I am calling '+ e.args.name);
});
Observer.fire('call',{name : 'dalsen'});       //发布事件
Observer.remove('call',call);                  //取消订阅某个事件
