// 多态

class Animal {
    protected name: string
    protected type: string = ''
    private kk: string = 'kk' // private成员不能被子类重写

    protected eat (): void {}
    constructor (name: string) {
        this.name = name
    }
}

/* class Dog extends Animal {
    protected type: string = 'dog' // 子类重写父类属性时必须要和父类成员的修饰符和类型一样
    private kk: string = '5' // private成员不能被子类重写

    public eat (): number { // 子类重写父类方法时可以和父类成员的修饰符不一样,实现和返回类型也可以不同
        console.log('dog eat')
        return 2
    }
} */

class Dog extends Animal {
    public eat (): void {
        console.log('dog eat')
    }
}

class Cat extends Animal {
    protected eat (): void {
        console.log('cat eat')
    }
}

let d1 = new Dog('dog')

d1.eat()