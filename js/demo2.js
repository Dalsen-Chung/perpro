function Person(name, sex, age) {
  this.name = name;
  this.sex = sex;
  this.age = age;
}

Person.prototype.greeting = function() {
  console.log('Hello I am ' + this.name);
}

function Teacher(name, sex, age, school, subject) {
  Person.call(this, name, sex, age);
  this.school = school;
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

let teacher = new Teacher('dalsen', 21, '北大', 'English');
