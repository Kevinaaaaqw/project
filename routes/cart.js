var express = require('express')
var page = express.Router()
page.get('/',function(req,res){
    res.render('cart/cart',{
        product : "kevin"
    })
})
page.get('/order',function(req,res){
    let x= 
    res.render('cart/order',{})
})
page.get('/ordersuccess',function(req,res){
    res.render('cart/ordersuccess',{})
})
module.exports = page