  --新增    進   資料表名  欄位名稱    欄位名稱   值         
  insert into pokemon (pokename, pokeimage) values ('妙蛙種子', '../image/pokemon/001.png');
  
  
  --查詢                     (給代稱(後面輸入代稱.可知道所有欄位))
  select * from 資料表名稱     m where 欄位 = 名子
  --查詢                  的第幾筆找幾筆資料
  select * from 資料表名稱 limit 0 , 3;
  select * from 資料表名稱 limit 3 , 3;--範例
  select * from 資料表名稱 limit 6 , 3;--範例


--計算某資料表內資料比數數量
select count(*) from 資料表名稱