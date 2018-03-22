function Person(name){
  if (this instanceof Perosn){
    this.name = name;
  }else{
    return new Person(name);
  }
}

let perosn = new Person('dalsen');
Person('dalsen');
