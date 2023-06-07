//常用指令一
var express = require('express')                  //接收開伺服器功能


//常用指令二
var app = express()                               //接收伺服器function回傳的物件


//常用指令三
//                   從網頁端接收資訊     回應使用者
app.get('/',function(req                ,res       ){                    //架網站讓使用者透過接此網址連接到這裡
        //function為要在這裡做的事(引用html檔、渲染檔案(ejs))
})


//常用指令四
app.listen(3000,function(){                       //伺服器啟動時串接的路由(3000是路由路線數字)function為成功動時做的動作
    console.log('成功')                           //告訴工程師有成功啟動
})


//常用指令五
var mysql = require('mysql')                      //接收連接資料庫功能
var coon = mysql.createConnection({               //連接資料庫
    host:'locohost',                              //連接地址
    user : "root",                                //使用者名稱
    password : "1234",                            //密碼
    database : "aaaa"                             //連接資料庫名稱
})


//常用指令六
coon.connect(function(err){             //開始連接資料庫執行function，參數err有錯誤才會報
    if(err==null){
        //沒錯誤做事
    }else{
        //有錯誤做事 err內有錯誤原因給coding看，
        //errno所有錯誤都會報，是號碼
        //sqlMessage錯誤內容資料庫錯誤報錯
    }
})

//常用指令七
//類型一 無回傳
//可以用query執行sql指令，                  隱碼攻擊預防       放隱碼參數          報錯回傳訊息   insert資料庫不會回傳結果
coon.query("insert into pokemon (pokename) values (?)",     ['水伊布'],function(err          ,data                   ){
    if(err == null){
        //沒錯誤做事
    }else{
        //有錯誤做事 err內有錯誤原因給coding看，
    }
})

//類型二 有回傳
//可以用query執行sql指令，                  隱碼攻擊預防       放隱碼參數          報錯回傳訊息   資料庫回傳
coon.query("select * from 資料表名稱 where  欄位 = ?",        ['水伊布'],function(err          ,data){
    //做事情(指令七會包在指令三裡面)
})


//常用指令八(三+七)
app.get('/',function(req,res){
    coon.query("select * from 資料表名稱 where 欄位 = ?",['水伊布'],function(err,data){
        //網頁寫出回傳結果   物件變 JSON 好讓前端可以處理打在頁面上
        res.send(           JSON.stringify(data))
    })
})


//常用指令九(關於渲染網頁(把資料庫資料有後端處理後傳至前端))
app.get('/',function(req,res){
    //                                       的第?筆  找10筆資料  ?=10
    coon.query("select * from 資料表名稱 limit  ?      ,10"     ,['0'],function(err,data){
        //將資料渲染至目標job網頁
        res.render("job", JSON.stringify(data));
    })
})


//常用指令十(關於輸出自動化(設立變數減少作業負擔))用透過變換網址的數字使得頁面的查詢資料筆數不一樣
//        :app為網址變數(這個變數算是網頁的回傳值所以會在req物件裡面)
app.get('/:app',function(req,res){
    //                                       的?幾筆  找10筆資料  把變數呼叫出來(等於是從第(變數)比資料開始查詢)
    coon.query("select * from 資料表名稱 limit  ?      ,10"     ,[req.params.app],function(err,data){
        //將資料渲染至目標job網頁
        res.render("job", JSON.stringify(data));
    })
})

//P.S 上面是生成一個網頁，另外關於有一個搜尋頁自動生產頁簽讓其可以連到上面的網頁也適用類似方法


//常用指令十一(計算整筆資料數目)


    //                 計算數目                    
    coon.query("select count(*) from 資料表名稱 "     ,[],function(err,data){
        //將資料回傳是字串現在把她轉成數字
        data = parseInt(data);
        //假設一頁有10筆資料總共會有幾頁
        data/10
    })