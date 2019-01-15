let filestream = require('fs')
let express = require('express')
let app = express()
// let tipCalc = function(total,tipPercent){
// 	return total *(tipPercent/100)
// }

// app.get('/greeting/:name', (request, response) => {
//   response.send(`Helloo ${request.params.name}`)
// });



// app.get('/tip/:total/:tipPercent',(request,response)=>{
// 	response.send(`Your tip is ${tipCalc(request.params.total,request.params.tipPercent)}`)
// })





let magicEight = ()=>{
    let arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let randVal = arr[Math.floor(Math.random()*(arr.length+1))]
    
    return randVal
}


app.get('/magic/Will%20I%20Be%20A%20Millionaire',(request,response)=>{
	response.send(`shake shake ${magicEight()}`)
})

app.listen(9000)