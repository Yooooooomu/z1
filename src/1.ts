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

// overload
interface dbConnectionForm {
  user: string
  password: string
  host?: string // ?代表可选成员
  port?: number
}

function connectionDB (obj: dbConnectionForm): string
function connectionDB (arr: [string, string, string?, number?]): string // ?代表可选成员
function connectionDB (user: string, password: string, host?: string, port?: number): string // ?代表可选成员
function connectionDB (arg1: any, password?: any, host?: any, port?: any): string {
  return ''
}

connectionDB('user', '123456')
connectionDB('user', '123456', '127.0.0.1' ,3306)
connectionDB({
  user: 'user',
  password: 'password'
})
connectionDB(['user', '123456', '127.0.0.1'])

// 可选参数必须在必选参数的后排