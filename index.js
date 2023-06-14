var express = require('express')
var bodyParser = require('body-parser')
var urlencoded = bodyParser.urlencoded()
var querystring = require('querystring')
var coon = require('./routes/db')
var page = require('./routes/cart.js')
var app=express()//架設伺服器測試用
app.use('/public',express.static('public'))
app.set('view engine','ejs')//架設伺服器測試用 exports page 後就沒有用了
app.use('/a',page)//架設伺服器測試用 exports page 後就沒有用了
app.use(urlencoded)//架設伺服器測試用 exports page 後就沒有用了
app.listen(3000,function(){
    console.clear()
    console.log(new Date().toLocaleDateString())
})