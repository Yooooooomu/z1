"use strict";
// interface
var Sex;
(function (Sex) {
    Sex[Sex["man"] = 0] = "man";
    Sex[Sex["woman"] = 1] = "woman";
    Sex[Sex["unknown"] = 2] = "unknown";
})(Sex || (Sex = {}));
let ii1 = {
    a: 'a',
    b: 1,
    fn1(o) {
        console.log(o.age);
        console.log(o.name);
        console.log(o.sex);
    }
};
ii1.fn1({ name: 'nmsl', age: 12, sex: Sex.man });
{
    let a1 = ['n', 'm', 's', 'l'];
    console.log(a1);
}
{
    class Class1 {
        constructor(name, age) {
            this.nmsl = '1'; // 可以对ClassI1没有的成员扩展
            this.name = name;
            this.age = age;
        }
    }
    class Class2 extends Class1 {
        constructor() {
            super(...arguments);
            this.xxx = false;
        }
        todo() {
            console.log('todo');
        }
    }
    let c2 = new Class2('wsnd', 6);
    c2.nmsl = 'sss';
    console.log(c2);
    c2.todo();
}
