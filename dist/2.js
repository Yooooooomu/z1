"use strict";
class Student {
    get1() {
        return this;
    }
    set1(name = this.name, age = this.age, sex = this.sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    fn1() {
        return 'my son';
    }
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}
class WenkeStudent extends Student {
    fn1() {
        return 'myself';
    }
    p1() {
        // console.log(super.fn1()) // super指父类，父类和子类的成员名称重合时可以用super和this来区分
        console.log(this.fn1());
    }
    constructor(name, age, sex, strong) {
        super(name, age, sex);
        this.strong = strong;
    }
}
const s1 = new Student('sunxiaochuang', 27, true);
console.log(s1.get1());
s1.set1('nmsl', undefined, false);
console.log(s1.get1());
const w1 = new WenkeStudent('haode', 18, true, 80);
w1.p1();
// let kk: object = Object.assign({}, w1)
// console.log(kk.name)
