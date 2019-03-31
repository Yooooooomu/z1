abstract class Animal2 { //抽象类不能被实例化，只能定义子类的标准
    protected name: string
    public abstract eat(): any // 抽象类型规定子类必须包含abstract修饰符的成员(孙子及后代类可以不用)，定义方法时不写方法体，但要指定返回类型
    constructor (name: string) {
        this.name = name
    }
}

abstract class Inseres extends Animal2 { //昆虫抽象类继承Animal2抽象类
    public abstract fly(): any
}

class Dog2 extends Animal2 { // 抽象类的子类必须实现抽象类的方法
    public eat (): string { // 修饰符必须和抽象类的修饰符相同，返回值可以不同
        return `dog eat`
    }
    public run (): string { // 对抽象父类的扩展
        return `dog run`
    }
    constructor (name: string) {
        super(name)
    }
}

class Wenzi extends Inseres {
    public eat (): string {
        return `Wenzi eat`
    }
    public fly (): string {
        return `Wenzi fly`
    }
    public die (): string {
        return `Wenzi die`
    }
}

{ // 防止作用域污染
    let d1:Dog2 = new Dog2('dog')
    console.log(d1.eat())
    console.log(d1.run())
    let w1:Wenzi = new Wenzi('wenzi')
    console.log(w1.eat())
    console.log(w1.fly())
    console.log(w1.die())
}
