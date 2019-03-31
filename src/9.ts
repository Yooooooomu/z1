
{
    // 泛型
    // T表示泛型, 参数类型为T，返回类型也为T(函数传什么类型的参数就返回什么类型的值)
    /* function getVal<T> (val: T): number {
        return 1
    } */

    function getVal<T> (val: T): T {
        return val
    }

    // <string>表示要指定传什么类型的参数
    // getVal<string>(1) (false)
    getVal<string>('nmsl')

    class C1 <T> {
        nmsl (val: T): void {
            console.log(val, this.name)
        }
        constructor (public name: T) {}
    }

    let a1 = new C1<string>('wsnd')
    a1.nmsl('nmsl')

    /** 这种方式定义，只能通过下面的方式来实现 */
    interface Fn1 { // 普通接口
        <T> (val1: T, val2: number): number // 接口内定义泛型函数
    }

    
    /** */



    /** 这种方式定义，只能通过下面的方式来实现 */
    interface Fn2 <T> { // 泛型接口
        (val: T): string // 接口内定义普通函数
    }

    const f2: Fn2<string> = function (v): string {
        return ''
    }
    f2('1') // 参数必须是 Fn2<string> string类型

    function f3<T>(v: T): string {
        return 'f3'
    }
    const f4: Fn2<string> = f3
    f4('1')
    /** */
}

