let filestream = require('fs')
let express = require('express')
let app = express()

app.get('/greeting/:name', (request, response) => {
  response.send(`Helloo ${request.params.name}`)
});

app.listen(9000)
