"use strict";
// interface extends
// 类名和接口名任何时候都不能一样
{
    class Person {
        constructor(name, sex) {
            this.higher = 170;
            this.name = name;
            this.sex = sex;
        }
        eat() {
            console.log(`${this.name} is eating`);
        }
        work() {
            console.log(`${this.name} is working`);
        }
    }
    class Promer extends Person {
        coading(str) {
            return 5;
        }
    }
    let p1 = new Person('a1', true);
    console.log(p1);
    p1.higher = 555;
    p1.eat();
    p1.work();
    console.log(p1);
    let pp1 = new Promer('nmsl', true);
    console.log(pp1.coading('ok'));
}
