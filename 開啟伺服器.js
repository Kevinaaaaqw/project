//接收開啟伺服器功能
var express = require('express');
//開起伺服器
var app = express();
//
var bp = require('body-parser');
var bodyParser = require('body-parser')//小心不要打錯字
app.set('view engine','ejs')
app.get('/',function(req,res){
    console.log('pikachu~~~~');
    res.send('pipipipipipipi')
})
app.listen(3000,function(){
    console.log("pokemon get daze")
})