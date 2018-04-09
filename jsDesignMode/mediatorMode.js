//中介者模式
let Mediator = function () {
  let method = {};
  return {
    register : function (type, fn) {
      if (!method[type]){
        method[type] = [];
        method[type].push(fn);
      }else{
        method[type].push(fn);
      }
    },
    fire : function (type) {
      if (method[type]){
        let len = method[type].length;
        let i = 0 ;
        for(; i < len ; i++){
          method[type][i] && method[type][i]();
        }
      }else{
        throw new Error(type+' is undefined');
      }
    }
  }
}();

Mediator.register('say',function () {
  console.log('1230');
});
Mediator.register('say',function () {
  console.log('hahahah');
});
Mediator.fire('say');
Mediator.fire('demo');
