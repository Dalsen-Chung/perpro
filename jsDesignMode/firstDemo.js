/*
** 既可以为函数原型添加方法又可以为其自身添加方法的addmethod方法
*/
let method = function(){
  return {
    addmethod : function(name,fun,isPrototye){
      if (isPrototye){
        // this.__proto__[name] = fun;
        this.constructor.prototype[name] = fun;
      }else{
        this[name] = fun;
      }
      return this;
    }
  }
};

let m1 = method();
m1.addmethod('talk',function(){
  console.log('I am talking');
  return this;                            //链式调用
}).addmethod('run',function(){
  console.log('I am running');
  return this;
},true);

m1.talk().run();
