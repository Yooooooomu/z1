interface obj1 {
  name: string
  age: number
  sex: boolean
}

let o1: obj1 = {
  name: 'sun',
  age: 16,
  sex: false
}

/* let o2: obj1 = {
  name: 'sun',
  age: 16,
  sex: false,
  g: '555'
} */

/* let o3: obj1 = {

} */

let a1: [Array<number>, obj1] = [ // 元组,长度必须等于元组长度
  [1, 2, 3],
  {
    name: 'nmsl',
    age: 28,
    sex: true
  }
]

let a2: Array<number | obj1 | string> = [
  1,
  2,
  {
    name: 'xxx',
    age: 16,
    sex: false
  }
]

console.log(o1.name)
console.log(a1)
console.log(a2)