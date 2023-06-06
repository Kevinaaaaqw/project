var express = require('express');
var app = express();


var bp = require('body-parser');
// {
//     unescapeBuffer: [Function: unescapeBuffer],
//     unescape: [Function: qsUnescape],
//     escape: [Function: qsEscape],
//     stringify: [Function: stringify],
//     encode: [Function: stringify],
//     parse: [Function: parse],
//     decode: [Function: parse]
//   }


var bodyParser = require('body-parser')//小心不要打錯字
// [Function (anonymous)] {
//     json: [Getter],
//     raw: [Getter],
//     text: [Getter],
//     urlencoded: [Getter]
//   }
app.set('view engine','ejs')
app.get('/',function(req,res){
    console.log('pikachu~~~~');
    res.send('pipipipipipipi')
})
app.listen(3000,function(){
    console.log("pokemon get daze")
})