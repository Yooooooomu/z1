"use strict";
{
    let fn1 = (first, last) => {
        return first + last;
    };
    console.log(fn1('nmsl', 'wsnd'));
    let a1 = ['1', '2'];
    let a2 = {
        0: true,
        'nmsl': 'wsnd'
    };
    console.log(a2);
    class Animal {
        constructor() {
            this.name = 'name';
        }
    }
    class Dog extends Animal {
        constructor() {
            super(...arguments);
            this.breed = 'breed';
        }
    }
    let a3 = {
        0: new Dog(),
        'f': new Animal(),
        'g': new Dog()
    };
    let a4 = [new Dog()];
    // a4.length = 0 // length is readonly
    console.log(a4);
    let a5 = {
        a: 1,
        b: '2',
        // c: 3 // the Iarr5 interface not exist 'c'
        1: new Dog()
    };
    console.log(a5);
    class Class1 {
        msg() {
            return {
                name: this.name,
                sex: this.sex
            };
        }
        constructor(name, sex) {
            this.name = name;
            this.sex = sex;
        }
    }
    class Class2 {
        constructor() { }
    }
    let c2 = function () { };
    console.log(c2);
    console.log(Class2);
}
