const myStudents: string = "เซน,เวฟ,รุ้ง,เท็ก,สร"
const myStudentsArray: string[] = ["["เซน", "แทน" ,"เวฟ" , "รุ้ง" , "เท็ก" , "สร" ]"]
console.log(myStudents)
console.log(myStudentsArray)


const animal: string = 'กระต่าย*แมว*หมา*หมี'
const animalsArray: string[] = animal.split('*')
console.log(animalsArray)


console.log ("ตั้งต้น: ", animalsArray)
animalsArray.pop() // เอาตัวสุดท้ายออก
console.log("เอาตัวสุดท้ายออก: ", animalsArray)
animalsArray.push('แมว') // ใส่ต่อท้าย
console.log("ใส่ต่อท้าย: ", animalsArray)
animalsArray.shift() //เอาตัวหน้าออก
console.log("เอาตัวหน้าออก: " , animalsArray)
animalsArray.unshift ('แมลงสาป') //ใส่ตัวหน้า
console.log ("ใส่ตัวหน้า: ", animalsArray)


const Nname: string = 'นาเนียร์,เชอรี่,เจสซี่,ไมเนอร์'
const NnameArray: string [] = Nname.split (',')
NnameArray.sort()
console.log(NnameArray)
NnameArray.reverse()
console.log(NnameArray)

const me = {
    Firstname: 'nanier',
    Lastname: 'jubjub',
    age: 18,
    tel: '063333333',
    gender: 'female',
}

// ชื่อ: 