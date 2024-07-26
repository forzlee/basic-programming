function helloword() {

    console.log ("hi babe")
}

helloword () // ไม่มี input ไม่มี output

function helloName(name: string) {
    console.log(name)
}

helloName('forth') // มี input ไม่มี output

function getPi() {
    return 3.14
}
console.log(getPi()) // ไม่มี input แต่มี output



function st(fname : string, sname: string) {

    if (fname === 'mix' && sname === 'zane' ){
        console.log ('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('mix', 'zane') 


function st(fname : string, sname: string, tname: string) {

    if (!(fname === 'mix' sname === 'zane' && tname === 'forth')) {
        console.log ('พร้อมเรียน')
    } else {
        console.log ('ยังไม่พร้อมเรียน')
    }
    
}

st ('mix', 'zane', 'forth')


function test(G : string, H: number, W: number) {

    if (G === 'ชาย' && H >170 || (W >50 && W <= 110)) {
        console.log ('จับใบดำใบแดง')
    } else {
        console.log ('ไม่เข้าเกณฑ์')
    }
    
}

test ('ชาย', 115, 22)


function digital(age : number, pay : number, deposit : number) {
    if (age >=16 && pay <70000 && deposit <500000)
        console.log ("รับ 10000 บาท") {
    } else {
        console.log ("อดน้า")
    }

    }
digital (10, 2000000,1000000)

function helloword() {
    console.log("hi babe")
}

helloword() // ไม่มี input ไม่มี output

function helloName(name: string) {
    console.log(name)
}

helloName('forth') // มี input ไม่มี output

function getPi() {
    return 3.14
}
console.log(getPi()) // ไม่มี input แต่มี output




function st(fname: string, sname: string, tname: string) {

    if (fname === 'mix' && sname === 'zane' && tname === 'forth') {
        console.log('พร้อมเรียน')
    } else {
        console.log('ยังไม่พร้อมเรียน')
    }

}

st('mix', 'zane', 'forth')



function test(G: string, H: number, W: number) {

    if (G === 'ชาย' && H > 170 || (W > 50 && W <= 110)) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }

}

test('ชาย', 190, 75)



function test(G: string, H: number, W: number) {

    if (G === 'ชาย' && H > 170 || (W > 50 && W <= 110)) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }

}

test('ชาย', 115, 22)



function digital(age: number, pay: number, deposit: number) {
    if (age >= 16 && pay < 70000 && deposit < 500000) {
        console.log("รับ 10000 บาท")
    } else {
        console.log("อดน้า")
    }

}
digital(10, 2000000, 50000000)

