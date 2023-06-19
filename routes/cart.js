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
                    CMID:'01',
                    src : "public/img/product/coffee006冰滴咖啡去背.png",
                    productName : "咖啡機",
                    rentStart : "2023/04/11",
                    rentEnd : "2023/04/15",
                    day : daye.getDate()-days.getDate(),
                    rent : "450",
                    deposit : "888"
                },
                {
                    CMID:'02',
                    src : "public/img/product/coffee006冰滴咖啡去背.png",
                    productName : "咖啡機",
                    rentStart : "2023/04/11",
                    rentEnd : "2023/04/15",
                    day : daye.getDate()-days.getDate(),
                    rent : "450",
                    deposit : "999"
                },
                {
                    CMID:'03',
                    src : "public/img/product/coffee006冰滴咖啡去背.png",
                    productName : "咖啡機",
                    rentStart : "2023/04/11",
                    rentEnd : "2023/04/15",
                    day : daye.getDate()-days.getDate(),
                    rent : "450",
                    deposit : "344"
                },
            ]
        },
            {
            productUser : "kevin",
            product :[
                {
                    CMID:'04',
                    src : "public/img/product/coffee006冰滴咖啡去背.png",
                    productName : "咖啡機",
                    rentStart : "2023/04/11",
                    rentEnd : "2023/04/15",
                    day : daye.getDate()-days.getDate(),
                    rent : "450",
                    deposit : "600"
                },
                {
                    CMID:'05',
                    src : "public/img/product/coffee006冰滴咖啡去背.png",
                    productName : "咖啡機",
                    rentStart : "2023/04/11",
                    rentEnd : "2023/04/15",
                    day : daye.getDate()-days.getDate(),
                    rent : "430",
                    deposit : "200"
                },
            ]
        },
        ]
    })
})
page.post('/order',function(req,res){
    console.log(req.params)
    res.render('cart/order',{
    })
})
page.get('/ordersuccess',function(req,res){
    res.render('cart/ordersuccess',{})
})
module.exports = page