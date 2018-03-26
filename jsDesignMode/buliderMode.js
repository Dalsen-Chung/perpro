//建造者模型   一个整体的对象切分为几个对象，利用其余对象分别处理业务需求，最后再统一各个对象。
let Human = function (param) {
  this.skill = param && param.skill || '保密';
  this.hoddy = param && param.hobby || '保密';
};
Human.prototype.getSkill = function () {
  console.log(this.skill);
}
Human.prototype.getHobby = function () {
  console.log(this.hobby);
}

let Named = function (name) {
  let that = this;
  (function(that,name){
    that.wholeName = name;
    if (name.indexOf(' ') > -1 ){
      that.FirstName = name.slice(0 , name.indexOf(' '));
      that.LastName = name.slice(name.indexOf(' '));
    }
  })(that,name)
};

let Person = function (name) {
  let person = new Human();
  person.name = new Named(name);
  return person;
}

let man = new Person('zhong da');
