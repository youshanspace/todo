### Todo List

#### 功能

- 可顯示待辦淸單
- 新增新的待辦
- 針對待辦狀態進行顯示
- 勾選調整待辦狀態
- 編輯待辦
- 刪除待辦
- 重整頁面後儲存待辦

#### 前端

##### Node.js

- 使用版本: v16.16.0

##### 安裝 package

- 於終端機輸入下列指令，安裝相關 package

```
npm install
```

##### 安裝 package

- 於終端機輸入下列指令，運行前端頁面

```
npm start
```

#### 後端

##### 採用 json-server 儲存 todo-list 資料

- 於根目錄下新增一檔案 "db.json"
- db.json 檔案內容新增：

```
{
  "todos": []
}
```

- 於終端機輸入下列指令，運行後端 json server

```
npm run server
```
