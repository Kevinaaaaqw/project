var express = require('express')
var page = express.Router()
page.get('/',function(req,res){
    res.render('cart/cart',{})
})
module.exports = page