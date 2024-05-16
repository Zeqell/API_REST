const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const {config} = require ('dotenv')

config()

const bookRouter = require ('./routes/book.router')

//Usamos express para los middlewares
const app = express()

//Parseador de Body
app.use(bodyParser.json())

//Aca conectamos la base de dastos
mongoose.connect(process.env.MONGO_URL,{dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection

app.use('/books', bookRouter)

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Servidor iniciando en el puerto ${port}`)
})