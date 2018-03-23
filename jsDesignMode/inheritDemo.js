let SuperClass = function () {
   this.book = ['a','b'];
}
let SubClass = function () {
  SuperClass.call(this);
};
SubClass.prototype = Object.create(SuperClass.prototype);
SubClass.prototype.constructor = SubClass;
let sub1 = new SubClass();
let sub2 = new SubClass();
