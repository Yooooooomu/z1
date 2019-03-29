class Student {
  private name: string
  private age: number
  private sex: boolean

  get1 (): object {
    return this
  }

  set1 (name: string = this.name, age: number = this.age, sex: boolean = this.sex): void {
    this.name = name
    this.age = age
    this.sex = sex
  }

  protected fn1 (): string {
    return 'my son'
  }

  constructor (name: string, age: number, sex: boolean) {
    this.name = name
    this.age = age
    this.sex = sex
  }
}

class WenkeStudent extends Student {
  private strong: number

  protected fn1 (): string {
    return 'myself'
  }

  p1 (): void {
    // console.log(super.fn1()) // super指父类，父类和子类的成员名称重合时可以用super和this来区分
    console.log(this.fn1())
  }

  constructor (name: string, age: number, sex: boolean, strong: number) { // 子类重写父类构造函数时必须调用super
    super(name, age, sex)
    this.strong = strong
  }
}

const s1: Student = new Student('sunxiaochuang', 27, true)
console.log(s1.get1())
s1.set1('nmsl', undefined, false)
console.log(s1.get1())

const w1: WenkeStudent = new WenkeStudent('haode', 18, true, 80)

w1.p1()

// let kk: object = Object.assign({}, w1)
// console.log(kk.name)