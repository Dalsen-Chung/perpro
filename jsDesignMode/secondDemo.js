let Book = function(){
  let price = 20;                     //私有属性
  let aa = function (){               //私有方法
    console.log('123');
  };
  this.publisher = '人民出版社';             //对象公有属性
  this.read = function () {                 //对象公有方法
    console.log('I am reading book which price is ' + price);
    aa();
  }
}

Book.date = '2012年';                  //类静态公有属性 实例对象无法访问
Book.outPutDate = function () {        //类静态公有方法 实例对象无法访问
  console.log(this.date);
}

let book = new Book();
book.read();

//闭包创建对象
let Person = (function(){
  let count = 0;
  function Man(old,height){
    this.old = old;
    this.height = height;
    this.sayAge = function () {
      console.log(this.old);
    }
    count ++;
    if (count > 2){
      throw new Error('only can create two man');
    }
  }
  return Man;
})();

let man1 = new Person(20,185);
man1.sayAge();

// let man2 = new Person(30,185);
// man2.sayAge();
// //
// // let man3 = new Person(40,185);
// // man3.sayAge();

//创建安全类 防止在实例化对象的时候未添加new关键字
let Ball = function (amount,size) {
  if (this instanceof Ball){
    this.amount = amount;
    this.size = size;
    this.saySize = function () {     //key point
      console.log(this.size);
    }
  }else{
    return new Ball(amount,size);
  }
}

let ball = new Ball(10,'20px');
