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

  private static nmsl: string

  static get gNmsl (): string {
    return 'nmsl'
  }

  static wsnd (): void {
    console.log('wsnd')
  }
}

const p1: Person = new Person('sakuya', 16, false)

console.log(p1.pName)

p1.sName = 'lemi'

console.log(p1)

console.log(Person.gNmsl)
Person.wsnd()