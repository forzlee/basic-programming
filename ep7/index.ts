const myStudents: string = "เซน,เวฟ,รุ้ง,เท็ก,สร"
const myStudentsArray: string[] = ["เซน", "แทน" ,"เวฟ" , "รุ้ง" , "เท็ก" , "สร" ]
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
    Firstname: 'cherry',
    Lastname: 'vanilla',
    Age: 18,
    Tel: '063333333',
    Gender: 'female',
	Address: '77/7',
	Village:7,
	Road: 'gardenangle',
	District: 'flower',
	Province: 'Bangkok',
	PostalCode: 45678,
	Mail:'cherryjubjub@gmail.com',
}

// ชื่อ:cherry
// นามสกุล:vanilla
// อายุ:18
// เบอร์โทร:063333333
// เพศ:female
// ที่อยู่:77/7
// หมู่บ้าน:7
// ถนน:gardenangle
// เขต:flower
// จังหวัด:Bangkok
// รหัสไปรษณีย์:45678
// เมล:cherryjubjub@gmail.com