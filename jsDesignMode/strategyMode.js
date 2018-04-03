//策略模式   eg:以多个商品算法为例，核心在于封装私有属性并暴露接口给用户使用
let PriceStrategy = function () {
  let strategy = {
    return30 : function (price) {              //满100返30
      return +price + parseInt(price / 100) * 30;              // +price 转换为数字类型
    },
    return50 : function (price) {             //满100返50
      return +price + parseInt(price / 100) * 50;
    },
    precent90 : function (price) {            //九折
      return price * 100 * 90 / 10000;      //注意:JS处理小数除法有bug,因此先将价格转换为整数
    },
    precent70 : function (price) {            //七折
      return price * 100 * 70 / 10000;
    }
  };

  return {
    execute :  function (type, price) {                            //暴露执行算法接口
      return strategy[type]  && strategy[type](price);
    },
    addStrategy : function (type, fn) {                            //暴露添加新的方法接口
      if(!strategy[type]){
        strategy[type] = fn;
      }else{
        throw new Error('this method is already exist');
      }
    }
  }
};

let finalP = new PriceStrategy();
console.log(finalP);

let p =finalP.execute('return30',100);
console.log(p);
finalP.addStrategy('aa',function(price){
  console.log(price);
});
