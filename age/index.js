const fs = require("fs");

function getFileContents(fileLocation) {
    const text = fs.readFileSync(fileLocation).toString();
    return text
}

function getAgesArrayFrom(fileContents) {
    const lineArray = fileContents.split('\n')
    const ageArray = []

    lineArray.forEach(line => {
        const aLineArray = line.split(' ')
        const anAge = aLineArray[2]
        ageArray.push(Number(anAge))
    })
    return ageArray
}

function calculateMeanAge(ageArray) {
    const ageSum = ageArray.reduce((previous, current) => previous + current)
    const meanAge = ageSum / ageArray.length
    return meanAge
}

const fileContents = getFileContents("./incoming/nameage.txt")
const agesArray = getAgesArrayFrom(fileContents)
const meanAge = calculateMeanAge(agesArray)


console.log('The mean age is: ' + meanAge)