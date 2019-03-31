// namespace

namespace mingxing {
    export class Yangfan { // 在命名空间里要export
        public height: number
        public money: number
        public msg (): void {
            console.log('wo shi ming xing')
        }
        constructor (height: number, money: number) {
            this.height = height
            this.money = money
        }
    }
}

namespace kenglao {
    export class Yangfan { // 在命名空间里要export
        public height: number
        public money: number
        public msg (): void {
            console.log('duren 13')
        }
        constructor (height: number, money: number) {
            this.height = height
            this.money = money
        }
    }
}

let y1: mingxing.Yangfan = new mingxing.Yangfan(180, 1000000)
let y2: kenglao.Yangfan = new kenglao.Yangfan(150, 0)

y1.msg()
y2.msg()