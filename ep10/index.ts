
const database = [
    {
        email: 'usergmail.com',
        password: 'loveYou3000'
    }
]



function registe(email: string, password: string) {
    if (email.includes('@') && email.lastIndexOf('@') !== email.length - 1) {
        if (password.length > 8 && password.length < 16) {
            const userObject = {
                email: email,
                password: password
            }
            database.push(userObject)
            alert('สมัครสมาชิกแล้ว ยินดีต้อนรับ คุณ'+ email)
        } else {
            alert('รหัสผ่านมากกว่า 8 ตัว และไม่เกิน 16 ตัว')
        }
    } else {
        alert('Email ไม่ถูกต้อง')
    }
}

registe('cherry@mail.com', '123456789')



// เปลี่ยน u เป็น +
//เปลี่ยนเลข 6 เป็น *
//เปลี่ยนเลข 0 เป็น ^

//+u6*0^ --> ++**^^ --> uu6600
const database = [
    {
        email: 'usergmail.com',
        password: 'loveYou3000'
    },
    {
        email: 'cherry@gmail.com',
        password: '12345*7แปด'
    }
]



function decryptPassword(password: string) {
    return password.replaceAll('+', 'u').replaceAll('*', '6').replaceAll('^', '0')
}
function login(email: string, password: string) {
    const user = database.filter(function (element, index) {
        return element.email === email
    })
    if (user.length > 0) {
        const realPassword = decryptPassword(user[0].password)

        if (realPassword === password) {
            alert('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ')
        } else {
            alert('รหัสผ่านไม่ถูกต้อง โปรดตรวจสอบ')
        }
    } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
    }

}
login('cherry@gmail.com', '1234567แปด')