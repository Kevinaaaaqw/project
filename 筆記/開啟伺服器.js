var express = require('express');//接收開啟伺服器功能
var app = express();//開起伺服器
var bodyParser = require('body-parser');//小心不要打錯字
var urlencoded = bodyParser.urlencoded()//解碼功能

app.set('view engine','ejs')
app.get('/',function(req,res){
    console.log('確定後台成功(要刪掉)');
    res.send('建立成功(動工~你很棒)')
})
//伺服器建立時間
var date = new Date();
var month = date.getMonth()+1+'月';
var day = date.getDay()+'日';
var hour = date.getHours()+'時';
var minutes = date.getMinutes()+'分';
var seconds = date.getSeconds()+'秒';
var time = month+day+hour+minutes+seconds;
//建立結束
app.listen(3000,function(){
    console.clear()
    console.log(time+"pokemon get daze")
})