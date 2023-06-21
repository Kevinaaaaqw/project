var express = require('express')
var page = express.Router()
page.get('/',function(req,res){
    let days = new Date("2023/04/11")
    let daye = new Date("2023/04/15")
    res.render('cart/cart',{
        item:[
            {
            productUser : "非洲酋長",
            product :[
                {
                    CMID:'aaaaa',
                    src : "public/img/product/coffee006冰滴咖啡去背.png",
                    productName : "咖啡機",
                    rentStart : "2023/04/11",
                    rentEnd : "2023/04/15",
                    day : daye.getDate()-days.getDate(),
                    rent : "450",
                    deposit : "888",
                    total:450*(daye.getDate()-days.getDate())+888
                },
                {
                    CMID:'bbbbb',
                    src : "public/img/product/coffee006冰滴咖啡去背.png",
                    productName : "咖啡機",
                    rentStart : "2023/04/11",
                    rentEnd : "2023/04/15",
                    day : daye.getDate()-days.getDate(),
                    rent : "450",
                    deposit : "888",
                    total:450*(daye.getDate()-days.getDate())+888
                },
            ]
        },
        ]
    })
})
page.get('/order',function(req,res){
    let days = new Date("2023/04/11")
    let daye = new Date("2023/04/15")
    function z(x){ 
        return `${(x.getFullYear()-1911)}年${x.getMonth()+1}月${x.getDate()}日`
    }
    // 接收購物車選購資訊
    let x = req.query
    // 後單接資料庫查詢
    res.render('cart/order',{item:[
        {
        productUserInfo : {
            name :"非洲酋長",
            id : '8787',
            address : '公益路',
            phoneNumber : '0921329292',
            email:'kevin0987@gmail.com'
        },
        product :[
            {
                CMID:'aaaaa',
                src : "public/img/product/coffee006冰滴咖啡去背.png",
                productName : "咖啡機",
                rentStart : "2023/04/11",
                rentEnd : "2023/04/15",
                day : daye.getDate()-days.getDate(),
                years:z(days),
                yeare:z(daye),
                rent : "450",
                deposit : "888",
                total:450*(daye.getDate()-days.getDate())+888
            }
        ]
    }
],

//會員資料
memberInfo :{
    name : '景智大大',
    id :'9487',
    address :'公二路',
    phoneNumber : '099999292',
    email:'hook12222@gmail.com'
},
tradeType:{
    mark:['7-11','ok','famly'],
    pika:['宅配'],
    poststation:['離島郵寄',]
}


    })
})
page.get('/ordersuccess',function(req,res){
    res.render('cart/ordersuccess',{})
})
module.exports = page