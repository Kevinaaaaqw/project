//接收開啟伺服器功能
var express = require('express');
//開起伺服器
var app = express();


//建立時間
var date = new Date();
var month = date.getMonth()+1+'月';
var day = date.getDay()+'日';
var hour = date.getHours()+'時';
var minutes = date.getMinutes()+'分';
var seconds = date.getSeconds()+'秒';
var time = month+day+hour+minutes+seconds;
//建立結束
//


var bp = require('body-parser');
var bodyParser = require('body-parser')//小心不要打錯字
app.set('view engine','ejs')
app.get('/',function(req,res){
    console.log('pikachu~~~~');
    res.send('pipipipipipipi')
})
app.listen(3000,function(){
    console.log(time+"pokemon get daze")
})