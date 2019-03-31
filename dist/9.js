"use strict";
{
    // 泛型
    // T表示泛型, 参数类型为T，返回类型也为T(函数传什么类型的参数就返回什么类型的值)
    /* function getVal<T> (val: T): number {
        return 1
    } */
    function getVal(val) {
        return val;
    }
    // <string>表示要指定传什么类型的参数
    // getVal<string>(1) (false)
    getVal('nmsl');
    class C1 {
        constructor(name) {
            this.name = name;
        }
        nmsl(val) {
            console.log(val, this.name);
        }
    }
    let a1 = new C1('wsnd');
    a1.nmsl('nmsl');
    const f2 = function (v) {
        return '';
    };
    f2('1'); // 参数必须是 Fn2<string> string类型
    function f3(v) {
        return 'f3';
    }
    const f4 = f3;
    f4('1');
    /** */
}
