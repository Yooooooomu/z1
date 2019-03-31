"use strict";
// 多态
class Animal {
    constructor(name) {
        this.type = '';
        this.kk = 'kk'; // private成员不能被子类重写
        this.name = name;
    }
    eat() { }
}
/* class Dog extends Animal {
    protected type: string = 'dog' // 子类重写父类属性时必须要和父类成员的修饰符和类型一样
    private kk: string = '5' // private成员不能被子类重写

    public eat (): number { // 子类重写父类方法时可以和父类成员的修饰符不一样,实现和返回类型也可以不同
        console.log('dog eat')
        return 2
    }
} */
class Dog extends Animal {
    eat() {
        console.log('dog eat');
    }
}
class Cat extends Animal {
    eat() {
        console.log('cat eat');
    }
}
let d1 = new Dog('dog');
d1.eat();
