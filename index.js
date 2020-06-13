const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const path = require('path')
const connectDB = require("./config/db")

const PORT = process.env.PORT || 3000

const app = express()

connectDB();

//Создание движка
const hbs = exphbs.create({
    defaultLayout: "main",
    extname: 'hbs'
})
//Регистрация движка по ключу hbs
app.engine('hbs', hbs.engine)

//Указание на использование шаблонизатора
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes)



app.listen(PORT,() => {
    console.log('Server is up and running')
})

