//抽象工厂模式

/*
    抽象父类创建的思路：
      1.先定义抽象父类，添加类中共有有的属性及抽象方法(不可实现的方法，只作为子类继承的规范);
      2.实现抽象工厂函数，子类继承父类都需要经过这个方法去实现，因此所有抽象父类可写在该函数的对象中，如：小车父类：AbstractFactory.Car;
      3.抽象工厂函数中先判断是否存在该抽象父类，若存在则通过过渡类让子类继承抽象父类。不存在该抽象父类则抛出错误;
      4.编写子类，在子类中添加公有属性及子类专有属性，并通过抽象工厂函数继承对应的父类，最后实现父类中的抽象方法；
      5.最后方可根据抽象父类定义的方法，利用子类的继承去实例化子类的对象。
*/


let AbstractFactory = function (subClass,supClass) {
  //先判断是否存在抽象父类
  if (typeof AbstractFactory[supClass] === 'function'){
    //存在则通过过渡类让子类继承父类,继承时也要继承父类的属性
    let F = function () {};
    F.prototype = new AbstractFactory[supClass]();
    subClass.constructor = subClass;
    subClass.prototype = new F();
    console.log(subClass.prototype);
  }else{
    //不存在该抽象父类
    return new Error('不存在该抽象父类');
  }
};
AbstractFactory.Car = function () {
  this.type = 'car';
};
AbstractFactory.Car.prototype  = {
  getSpeed : function () {
    return new Error('抽象方法不允许调用');
  },
  getPrice : function () {
    return new Error('抽象方法不允许调用');
  }
};
AbstractFactory.Bus = function () {
  this.type = 'bus';
};
AbstractFactory.Bus.prototype = {
  getSitNum : function () {
    return new Error('抽象方法不允许调用');
  },
  getPrice : function () {
    return new Error('抽象方法不允许调用');
  }
}
AbstractFactory.Truck = function () {
  this.type = 'truck';
};
AbstractFactory.Truck.prototype = {
  getSize : function () {
    return new Error('抽象方法不允许调用');
  },
  getPrice : function () {
    return new Error('抽象方法不允许调用');
  }
}

//创建宝马车子类
let BMW = function (price, speed) {
  this.price = price;
  this.speed = speed;
}
AbstractFactory(BMW,'Car');
BMW.prototype.getSpeed = function () {
  console.log(this.speed);
}
BMW.prototype.getPrice = function () {
  console.log(this.price);
}

let bm1 = new BMW(52111,'200km/h');
