function secondHello (name: string) {
    console.log(name)
}//รับ input แต่ไม่ output

console.log(secondHello('Max'))

function getPi (){
 return 3.14
}

console.log(getPi())

function st(fname: string, sname: string)  {
    if (fname === 'nan' &&  sname === 'pleum') {
        console.log ('เริ่มสอน')
    } else {
        console.log ('ยังไม่สอน')
    }
}
st('nan','pleum')

function bo(fname: string, sname: string, tname: string)  {
    if ((fname === 'nan' ||  sname === 'pleum') && tname === 'yo' ) {
        console.log ('เริ่มสอน')
    } else {
        console.log ('ยังไม่สอน')
    }
}
bo('nan','pleum', 'yo')

function room(gender: string, height: number ) {
    if (gender === 'เพศชาย' && height > 170) {
   console.log ('จับใบดำใบแดง')
    } else {
   console.log ('ไม่เข้าเกณท์')     
    }
} 
room('เพศชาย', 175)

function ioom(gender: string, height: number,  weight: number) {
    if (gender === 'เพศชาย' && height > 170 || (weight > 50 && weight <= 110))  {
   console.log ('จับใบดำใบแดง')
    } else {
   console.log ('ไม่เข้าเกณท์')     
    }
    
} 
ioom('เพศชาย', 170,55)