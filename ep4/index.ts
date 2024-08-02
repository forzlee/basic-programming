function shirtsize(size: string) {
    switch (size) {
        case 's':
            console.log('ผอม')
            break
        case 'm':
            console.log('ผอม')
            break
        case 'l':
            console.log('ท้วม')
            break
        case 'xl':
            console.log('อ้วน')
            break
        case '2xl':
            console.log('อ้วน')
            break

            default:
            console.log ('abc')
            break
    }
}
shirtsize('แจมิน')


function fixedDecimal (n: number, digit: number){
    const x = n.toFixed(digit)
    return x
}
console.log(fixedDecimal(40.67676,10))

function forth ( n: number){
    const x = n.toLocaleString()
    return x
}
console.log(forth(10000))

const str: string = "Papawadee"
console.log(str.toLocaleUpperCase())

function checkStringLength (f: string){
 console.log(f.length)
}

checkStringLength('พี่แจมินรักน้องโฟ้ดลีนะครับ')


function loveNaJaemin (msg: string, index: number){
    const x = msg.charAt(index)
    return x
}

console.log(loveNaJaemin('พี่แจมินรักหนูไหม', 5))


function bibiforth (msg: string , search: string) {
    if (msg.includes(search)) {
        console.log(msg.indexOf(search))
    } else {
        console.log ('ไม่พบคำที่ค้นหา')
    }
}
bibiforth ('พี่แจมินรักหนูไหม', 'รัก')
