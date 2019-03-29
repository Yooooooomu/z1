let add: Function = (...arg:Array<number>): number => {
  let sum: number = 0
  arg.forEach((num: number) => {
    sum += num
  })
  return sum
}

const aadddd = add

add = () => {}

console.log(aadddd(1, 2, 6, 8, 51))

let f1: Function = (a1: string, a2: string = 'define', ...args: Array<any>): void => {
  console.log(a1, a2, args)
}

f1('ok', undefined, 1, 2, 3) // 只认undefined不认null