console.log(aaa,bbb,ccc)//console.log()用逗號各開相當於使用多個console.log()

require()               //require接收物品時需要接收的東西是單字(例如express)系統會直接去node_modules資料夾找，自己創建的檔案則需要依照自己放置的路徑(例如./member/app.ejs)

(function(){})()    //立即執行function

//洨知識!!!!!!!!!!!!!!!!!!!!!!
function serializeToJSON(data) {
    let values = {}
    for(index in data){
        let x =data[index].name
        values.x=data[index].values
        //相當於...下方如此
        values[data[index].name]=data[index].values

    }
}
 // 40. 透過 [] 可以 取得 | 新增 object 的屬性
 s1['english']=99
 console.log(s1.english)
//洨知識!!!!!!!!!!!!!!!!!!!!!!

//頁面(res)中物件所儲存的資料，在該function執行的地方(當次請求)接可以使用
res.locals.物件
//example
//創建function
function example(req,res,next){
    res.locals.istest = '我好累'
    next()
}
//使用該物件的情形
app.get('/',[example(),function(res,req){
    res.reder('目標.ejs',{
        //送出物件時裡面不用夾帶資料也可以使用   (istest = '我好累')
    })
}])


//搜尋
app.get("/restful",[function(req,res){
    res.send('成功')
}])
//修改
app.post("/restful",[function(req,res){
    res.send('成功')
}])
//刪除
app.delete("/restful",[function(req,res){
    res.send('成功')
}])
//新增
app.put("/restful",[function(req,res){
    res.send('成功')
}])
