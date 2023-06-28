var express = require('express');
var app = express;
var page = express.Router();
var cityCountyData = require('../public/json/CityCountyData.json')
//暫時設一個物件
function z(x){ 
    return `${(x.getFullYear()-1911)}年${x.getMonth()+1}月${x.getDate()}日`
}
let days = new Date("2023/04/11")
let daye = new Date("2023/04/15")
var obj = {
    CMID:'aaaaa',
    src : "public/img/product/coffee006冰滴咖啡去背.png",
    productName : "咖啡機",
    rentStart : "2023/04/11",
    rentEnd : "2023/04/15",                
    years:z(days),
    yeare:z(daye),
    day : daye.getDate()-days.getDate(),
    rent : "450",
    deposit : "888",
    total:450*(daye.getDate()-days.getDate())+888,
    productCity:'臺北市'
}
////
page.get('/',function(req,res){
    res.render('cart/cart',{
    item:[
        {
        productUser : "非洲酋長",
        product :[
            obj,
            obj,
            obj
                ]
        },
        {
        productUser : "非洲酋長",
        product :[
            obj,
            obj,
            obj
                ]
        }
        ]
    })
})
page.get('/order',function(req,res){
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
            obj,
            obj,
            obj
        ]
    },
        {
        productUserInfo : {
            name :"非洲酋長",
            id : '8787',
            address : '公益路',
            phoneNumber : '0921329292',
            email:'kevin0987@gmail.com'
        },
        product :[
            obj,
            obj,
            obj
        ]
    }
],

//會員資料
memberInfo :{
    name : '景智大大',
    id :'9999',
    address :'公二路',
    phoneNumber : '099999292',
    email:'hook12222@gmail.com'
},
//交易資料
tradeType:{
    mark:['7-11','ok','famly'],
    pika:['宅配'],
    poststation:['離島郵寄',]
},
cityCountyData


    })
})
page.get('/ordersuccess',function(req,res){
    res.render('cart/ordersuccess',{})
})
page.get('/creditCards',(req,res)=>{
    res.send({cardNumber:"1111-1111-1111-1111"})
})
module.exports = page