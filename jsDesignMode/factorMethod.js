//安全模式类的工厂方法

//利用工厂模式创建不同种类的对象                     优点：耦合度低，只需有针对地编写函数，构造产品中参数注入的灵活性高 ，安全模式避免了遗漏new关键字
let Factory = function (type,content) {
  if (this instanceof Factory){
    return new this[type](content);
  }else{
    return new Factory(type,content);
  }
}

Factory.prototype = {
  Java : function (content) {
    this.content  = content;
    (function(content){
      let div = document.createElement('div');
      let span = document.createElement('span');
      span.innerHTML = content;
      div.appendChild(span);
      document.body.appendChild(div);
    })(content);
  },
  JavaScript : function (content) {
    this.a = '1';
    this.b = '2';
  }
};

let java = Factory('Java','I am a lesson for java');
