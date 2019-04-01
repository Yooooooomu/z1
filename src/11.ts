{
  interface Ifn1 {
    (firstName: string, lastName: string): string
  }

  let fn1: Ifn1 = (first, last) => {
    return first + last
  }

  console.log(fn1('nmsl', 'wsnd'))

  interface Iarr1 {
    [i: number]: string
  }

  let a1: Iarr1 = ['1', '2']

  interface Iarr2 {
    [i: number]: boolean
    [i: string]: boolean | string // string类型的返回值必须包含number类型所有的返回值，相当于number是父类，string是子类
  }

  let a2: Iarr2 = {
    0: true,
    'nmsl': 'wsnd'
  }

  console.log(a2)

  class Animal {
    name: string = 'name'
  }
  class Dog extends Animal {
      breed: string = 'breed'
  }

  interface Iarr3 {
      [x: number]: Dog // string类型的返回值必须包含number类型所有的返回值，相当于number是父类，string是子类
      [x: string]: Animal // string类型的返回值必须包含number类型所有的返回值，相当于number是父类，string是子类
  }

  let a3: Iarr3 = {
    0: new Dog(),
    'f': new Animal(),
    'g': new Dog()
  }

  interface Iarr4 { // 作为可索引类型接口
    [x: number]: Dog
    readonly length: number
    concat: Function
    slice: Function
    // name: any // 错误，因为array实例没有name属性
  }

  let a4: Iarr4 = [new Dog()]
  // a4.length = 0 // length is readonly

  console.log(a4)

  interface Iarr5 { // 作为普通接口
    [x: number]: Dog
    a: number
    b: string,
    // toString: number // toString is function
  }

  let a5: Iarr5 = {
    a: 1,
    b: '2',
    // c: 3 // the Iarr5 interface not exist 'c'
    1: new Dog()
  }

  console.log(a5)

  interface IClass1 {
    name: string
    msg (): {name: string, sex: boolean}
  }

  class Class1 implements IClass1 {
    public name: string
    public sex: boolean
    public msg (): {name: string, sex: boolean} {
      return {
        name: this.name,
        sex: this.sex
      }
    }

    constructor (name: string, sex: boolean) {
      this.name = name
      this.sex = sex
    }
  }

  /** 使用接口对构造函数进行规范 */


  interface IClass2 {
    name: string
    age: number
    sex?: boolean
  }

  interface IClass2Constructor { // 构造函数接口
    new (name: string, age: number, sex?: boolean): IClass2 // new (): ClassName // 表示对构造函数进行规范
  }
  
  class Class2 implements IClass2 { // 不能直接使用IClass2Constructor接口，需要声明一个变量，变量类型为IClass2Constructor，然后把这个类赋值给这个变量
    public name: string
    public age: number

    constructor (name: string, age: number) { // 构造函数属于静态成员，IClass2管不着，也就是说IClass2接口不能规范构造函数
      this.name = name
      this.age = age
    }
  }

  let Class22: IClass2Constructor = Class2 // 对Class2的构造函数进行接口检测

  new Class22('', 1)

  class Class3 implements IClass2 {
    public name: string = 'class3'
    public age: number = 666

    constructor () {}
  }

  let Class33: IClass2Constructor = Class3

  new Class33('nmsl', 2)

  /** */

  interface IExtends1 {
    name: string
    age: number
    sex?: boolean
  }

  interface IExtends2 {
    eat (name: string): void
    sleep (): string
  }

  interface IPerson1 extends IExtends1, IExtends2 {
    work (name: string, age: number, sex?: boolean): string
  }

  let p1: IPerson1 = {} as IPerson1
  p1.age = 16
  p1.name = 'wsnd'
  p1.eat = function (name) {
    return name
  }
  
}
