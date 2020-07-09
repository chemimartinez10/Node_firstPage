const express = require('express')
const app = express()
const path = require('path')

//settings
app.set('port', 4000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
//routes

app.use(require('./routes/'))

//middlewares

//static files
app.use(express.static(path.join(__dirname, 'public')))

//DEV server listening
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})