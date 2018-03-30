//组合模式    实现一个新闻列表
let News = function () {
  this.children = [];
  this.element = null;
};

News.prototype = {                         //父类
  init : function () {
    throw new Error('请重写你的方法');
  },
  add : function () {
    throw new Error('请重写你的方法');
  },
  get : function () {
    throw new Error('请重写你的方法');
  }
};

let Container = function (id,parent) {                    //模块容器,如ul
  News.call(this);
  this.id = id;             //容器id
  this.parent = parent;     //容器父元素
  this.init();
}
Container.prototype = Object.create(News.prototype);
Container.prototype.constructor = Container;

Container.prototype.init = function () {
  this.element = document.createElement('ul');
  this.element.id = this.id;
  this.element.className = 'ulContainer';
};

Container.prototype.add = function (child) {
  this.children.push(child);
  this.element.appendChild(child.get());
  this.parent.appendChild( this.element);
  return this;
};

Container.prototype.get = function () {
  return this.element;
}

let Item = function (classname) {   //封装多一个Item类
  News.call(this);
  this.className = classname;
  this.init();
}
Item.prototype = Object.create(News.prototype);
Item.prototype.constructor = Item;
Item.prototype.init = function () {
  this.element = document.createElement('li');
  this.element.className = this.className;
};
Item.prototype.add = function (child) {
  this.children.push(child);
  this.element.appendChild(child.getElement());
  return this;
};
Item.prototype.get = function () {
  return this.element;
}


let simpleNews = function (content) {
  News.call(this);
  this.content = content;
  this.init();
}
simpleNews.prototype = Object.create(News.prototype);
simpleNews.prototype.constructor = simpleNews;

simpleNews.prototype.add = function () {};
simpleNews.prototype.init = function () {
  this.element  = document.createElement('span');
  this.element.innerHTML = this.content;
};
simpleNews.prototype.getElement = function () {
  return this.element;
}

let ul = new Container('ulc' ,document.body);
ul.add(
  new Item('liclass').add(
    new simpleNews('112233')
  )
).add(
  new Item('licalss').add(
    new simpleNews('opopopo')
  )
).add(
  new Item('licalss').add(
    new simpleNews('opopopo')
  )
).add(
  new Item('licalss').add(
    new simpleNews('opopopo')
  )
).add(
  new Item('licalss').add(
    new simpleNews('opopopo')
  )
)
