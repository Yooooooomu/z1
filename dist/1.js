"use strict";
let add = (...arg) => {
    let sum = 0;
    arg.forEach((num) => {
        sum += num;
    });
    return sum;
};
const aadddd = add;
add = () => { };
console.log(aadddd(1, 2, 6, 8, 51));
let f1 = (a1, a2 = 'define', ...args) => {
    console.log(a1, a2, args);
};
f1('ok', undefined, 1, 2, 3); // 只认undefined不认null
