function add(a: number, b: number) {
    return a + b
}
console.log(add(5, 8))


function forth(a: number, b: number) {
    return a - b
}
console.log(forth(2, 2))


function lee(a: number, b: number, c: number, d: number) {
    return a * b * c * d
}
console.log(lee(2, 2, 2, 2))

function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final

    if (score < 50) {
        return 'grade F'
    } else if (score < 60) {
        return 'grade D'
    } else if (score < 70) {
        return 'grade C'
    } else if (score < 80) {
        return 'grade B'
    } else {
        return 'grade A'
    }
}
console.log (grade(20,50,20))