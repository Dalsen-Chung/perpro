//基于类的简单工厂模式                                弊端：类名耦合
let Running = function (runner) {
  this.runner = runner
  this.runerWord = 'I am from China';
}
Running.prototype.run = function () {
  console.log(this.runner + ' is running');
}

let BasketballPlayer = function (player) {
  this.player = player;
  this.playerWord = 'I am from China';
}
BasketballPlayer.prototype.play = function () {
  console.log(this.player + ' is playing baskerball');
}

let createSport = function (item,name) {
  switch (item) {
    case 'running' :
      return new Running(name);
    case 'basketball' :
      return new BasketballPlayer(name);
  }
}

let runner = createSport('running','dalsen');
runner.run();

let player = createSport('basketball','Shirley');
player.play();

//基于对象的简单工厂模式                             弊端：参数注入耦合
let createProduce = function (type, info) {
  let obj = new Object();
  obj.info = info;
  obj.show = function () {
    console.log(this.info);
  };
  if (type === "milk"){
    obj.price = 15;
  }
  if (type === "something2"){}
  if (type === "something3"){}
  if (type === "something4"){}
  return obj;
}

let milk = createProduce('milk','I am a milk');
milk.show();

let hotdog = createProduce('hotdog','I am a hotdog');
hotdog.show();
