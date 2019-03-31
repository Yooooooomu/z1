// interface extends
// 类名和接口名任何时候都不能一样
{
  interface AnimalInterface {
    name: string
    sex: boolean
    eat (): void
  }
  interface PersonInterface extends AnimalInterface {
    higher: number
    work (): void
  }

  interface PromerInterface {
    coading(str: string): number
  }

  class Person implements PersonInterface { // 必须包含PersonInterface中的成员
    public name: string
    public sex: boolean
    public higher: number = 170

    public eat (): void {
      console.log(`${this.name} is eating`)
    }

    public work (): void {
      console.log(`${this.name} is working`)
    }

    constructor (name: string, sex: boolean) {
      this.name = name
      this.sex = sex
    }
  }

  class Promer extends Person implements PromerInterface {
    public coading (str: string): number {
      return 5
    }
  }

  let p1 = new Person('a1', true)
  console.log(p1)
  p1.higher = 555
  p1.eat()
  p1.work()
  console.log(p1)

  let pp1 = new Promer('nmsl', true)
  console.log(pp1.coading('ok'))
}