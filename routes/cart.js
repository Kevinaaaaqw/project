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
        productUser : "非洲酋長",
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
]


    })
})
page.get('/ordersuccess',function(req,res){
    res.render('cart/ordersuccess',{})
})
module.exports = page