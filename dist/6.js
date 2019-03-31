"use strict";
class Animal2 {
    constructor(name) {
        this.name = name;
    }
}
class Inseres extends Animal2 {
}
class Dog2 extends Animal2 {
    eat() {
        return `dog eat`;
    }
    run() {
        return `dog run`;
    }
    constructor(name) {
        super(name);
    }
}
class Wenzi extends Inseres {
    eat() {
        return `Wenzi eat`;
    }
    fly() {
        return `Wenzi fly`;
    }
    die() {
        return `Wenzi die`;
    }
}
{ // 防止作用域污染
    let d1 = new Dog2('dog');
    console.log(d1.eat());
    console.log(d1.run());
    let w1 = new Wenzi('wenzi');
    console.log(w1.eat());
    console.log(w1.fly());
    console.log(w1.die());
}
