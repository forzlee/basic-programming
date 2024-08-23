console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

let sum: number = 0
for (let i = 1; i <= 31; i + 5) {
    sum = sum + i
}

console.log('Total: ', sum)
let sum: number = 0
let i: number = 1

while (i <= 31) {
    sum = sum + i
    i++
}
console.log('Total:', sum)

let sum: number = 0
let i: number = 1

do {
    sum = sum + i
} while (i <= 31)
console.log('Total:', sum)


let age: number = 0
for (let i = l; i <= 20; i++) {
    age = age + i
    console.log('ฉันอายุ ' + i + ' ปี ')
}

const car: string[] = ['Toyota', 'Honda', 'Susuki', 'Yamaha', 'Mazda', 'Byd']

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

const car: string[] = ['Toyota', 'Honda', 'Susuki', 'Yamaha', 'Mazda']

for (let i = 0; i < car.length; i++) {
    if (car[i] === 'Yamaha') {
        console.log('รถซื้อแกงก็แรงเหมือนกันจ้า')
    }
}

const muootb: string[] = ['film', 'gron', 'punn', 'x', 'time']

for (let i = 0; i < muootb.length; i++) {
    if (muootb[i] === 'film' , 'gron') {
        console.log('ไปกินหมูทะกันจ้า')
    }
}

const number: number[] = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < number.length; i++) {
    if (number[i] === 3 || number[i] === 5 || number[i] === 7) {
        number[i] = 0
    }
}

console.log(number)