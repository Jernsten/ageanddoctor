const prompt = require('prompt')

console.log('Hej! Hur kan jag hjälpa dig?')

prompt.start()

function promptForAnswer() {
    prompt.get(['jag'], async (err, result) => {
        const svar = await String(result.jag).replace('jag', 'du').replace('Jag', 'Du')
        console.log(svar + ', varför då?')
        promptForAnswer() // denna funktionen kallar på sig själv i slutet, för att få in nästa input
    })
}

promptForAnswer()