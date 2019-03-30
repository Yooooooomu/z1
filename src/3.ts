class Person {
  private name: string
  private age: number
  private sex: boolean

  get pName (): string { // 使用getter通过return来访问私有成员，外部直接obj.pName就能得到return的值
    return this.name
  }

  set sName (name: string) { // 使用setter来修改私有成员，外部直接obj.sName = newValue就能修改私有成员的值
    this.name = name
  }

  constructor(name: string, age: number, sex: boolean) {
    this.name = name
    this.age = age
    this.sex = sex
  }
  /* 
    构造函数也可以这样写
    constructor(private name: string, private age: number, private sex: boolean)

    但这样写后上面就不再需要定义
      private name: string
      private age: number
      private sex: boolean  这个了
  */

  static readonly nmsl: string = 'nmsl' // 静态成员，可以直接ClassName. 的方式访问(readonly)

  static wsnd (): void {
    console.log('wsnd')
  }
  static readonly kk: Function = (): void => {
    console.log('kk')
  }
}

const p1: Person = new Person('sakuya', 16, false)

console.log(p1.pName)

p1.sName = 'lemi'

console.log(p1)

console.log(Person.nmsl)
Person.wsnd()

