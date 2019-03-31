// interface

enum Sex {
  man,
  woman,
  unknown
}

interface O1 {
  name: string
  age: number
  sex: Sex
}

interface funI1 { // 函数接口,规定参数格式和返回值类型
  (o: O1): void
  // (n: number): void // 不能多个
}

interface I1 {
  fn1: funI1 // 使用funI1接口来规定fn1
  a: string
  readonly b: number // 只读
}

let ii1: I1 = {
  a: 'a',
  b: 1,
  fn1 (o: O1): void { // 严格按照funI1接口来声明函数
    console.log(o.age)
    console.log(o.name)
    console.log(o.sex)
  }
}

ii1.fn1({name: 'nmsl', age: 12, sex: Sex.man})
// ii1.b = 0 // b只读，不能改

interface ArrI1 { // 数组接口
  [i: number]: string // key类型为number，value类型为string
}
{
  let a1: ArrI1 = ['n', 'm', 's', 'l']
  console.log(a1)
}

{
  interface ClassI1 { // 类接口(定义的类(或抽象类)必须按照这个接口的格式写，和抽象类差不多，但不能加public等修饰符，但在类里的话成员全是public)
    name: string
    readonly age: number
    xxx: boolean
  }
  
  abstract class Class1 implements ClassI1 { // ClassI1对Class1类进行规范
    // protected name: string //只能写public，不能写其他修饰符
    public name: string
    age: number
    public abstract xxx: boolean
    public nmsl: string = '1' // 可以对ClassI1没有的成员扩展
    constructor (name: string, age: number) {
      this.name = name
      this.age = age
    }
    abstract todo (): any
  }
  class Class2 extends Class1 {
    public xxx: boolean = false
    todo (): void {
      console.log('todo')
    }
  }

  let c2 = new Class2('wsnd', 6)
  c2.nmsl = 'sss'
  console.log(c2)
  c2.todo()
}
