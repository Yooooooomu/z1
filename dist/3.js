"use strict";
class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    get pName() {
        return this.name;
    }
    set sName(name) {
        this.name = name;
    }
    static wsnd() {
        console.log('wsnd');
    }
}
/*
  构造函数也可以这样写
  constructor(private name: string, private age: number, private sex: boolean)

  但这样写后上面就不再需要定义
    private name: string
    private age: number
    private sex: boolean  这个了
*/
Person.nmsl = 'nmsl'; // 静态成员，可以直接ClassName. 的方式访问(readonly)
Person.kk = () => {
    console.log('kk');
};
const p1 = new Person('sakuya', 16, false);
console.log(p1.pName);
p1.sName = 'lemi';
console.log(p1);
console.log(Person.nmsl);
Person.wsnd();
