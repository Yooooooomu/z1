"use strict";
class Person {
    get pName() {
        return this.name;
    }
    set sName(name) {
        this.name = name;
    }
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    static get gNmsl() {
        return 'nmsl';
    }
    static wsnd() {
        console.log('wsnd');
    }
}
const p1 = new Person('sakuya', 16, false);
console.log(p1.pName);
p1.sName = 'lemi';
console.log(p1);
console.log(Person.gNmsl);
Person.wsnd();
