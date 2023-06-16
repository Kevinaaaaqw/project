var express = require('express')
var page = express.Router()
page.get('/',function(req,res){
    let days = new Date("2023/04/11")
    let daye = new Date("2023/04/15")
    res.render('cart/cart',{
        item:[
            {
            productUser : "kevin",
            product :[
                {
                    src : "public/img/product/coffee006冰滴咖啡去背.png",
                    productName : "咖啡機",
                    rentStart : "2023/04/11",
                    rentEnd : "2023/04/15",
                    day : daye.getDate()-days.getDate(),
                    rent : "450",
                    deposit : "1000"
                },
                {
                    src : "public/img/product/coffee006冰滴咖啡去背.png",
                    productName : "咖啡機",
                    rentStart : "2023/04/11",
                    rentEnd : "2023/04/15",
                    day : daye.getDate()-days.getDate(),
                    rent : "450",
                    deposit : "1000"
                },
                {
                    src : "public/img/product/coffee006冰滴咖啡去背.png",
                    productName : "咖啡機",
                    rentStart : "2023/04/11",
                    rentEnd : "2023/04/15",
                    day : daye.getDate()-days.getDate(),
                    rent : "450",
                    deposit : "1000"
                },
            ]
        },
            {
            productUser : "kevin",
            product :[
                {
                    src : "public/img/product/coffee006冰滴咖啡去背.png",
                    productName : "咖啡機",
                    rentStart : "2023/04/11",
                    rentEnd : "2023/04/15",
                    day : daye.getDate()-days.getDate(),
                    rent : "450",
                    deposit : "1000"
                },
                {
                    src : "public/img/product/coffee006冰滴咖啡去背.png",
                    productName : "咖啡機",
                    rentStart : "2023/04/11",
                    rentEnd : "2023/04/15",
                    day : daye.getDate()-days.getDate(),
                    rent : "450",
                    deposit : "1000"
                },
            ]
        },
        ]
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