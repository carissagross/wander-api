const express = require('express')
const app = express() // setting up the server

// routes
app.set('port', process.env.PORT || 3000)
app.locals.title = 'Wander'

app.get('/', (req, res) => {
    res.send('wander often!')
})

//server is listening on port 3000
app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
})

