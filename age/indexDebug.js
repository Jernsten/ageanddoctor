const fs = require("fs");
const allTextInFile = fs.readFileSync("./incoming/nameage.txt").toString();
const lineArray = allTextInFile.split('\n')
const ageArray = []

lineArray.forEach(line => {
    const aLineArray = line.split(' ')
    const anAge = aLineArray[2]
    ageArray.push(Number(anAge))
})

const ageSum = ageArray.reduce((previous, current) => {
    console.log(`__________________
    previous: ${previous}
    current: ${current}`)

    return previous + current
})

const ageMeanValue = ageSum / ageArray.length

console.log('\n\nMedelåldern är ' + ageMeanValue)