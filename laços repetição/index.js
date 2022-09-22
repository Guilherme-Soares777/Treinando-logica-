
let countZe = 0
let countChico = 0

let ze = 110
let chico = 150

while (ze < chico) {
    ze += 3
    countZe++

    if (chico >= ze) {
        chico += 2
        countChico++
    }
}
console.log(`Serão necessário ${countZe} anos para Zé ser maior que Chico`)
console.log(countChico)






/*let countZe = 0
let countChico = 0

let ze = 110
let chico = 150

while (ze < chico || chico > ze) {
    ze += 3
    countZe++

    chico+=2
    countChico++

}
console.log(countZe)
console.log(countChico)
*/