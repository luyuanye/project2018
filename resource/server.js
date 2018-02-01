let express = require("express");
let bodyParser = require('body-parser');
let session = require('express-session');
let fs = require('fs')
let app = express();
app.use(bodyParser.json());
app.use(session({
    resave: true,//每次访问都重新保存session
    saveUninitialized: true,//保存未初始化的session
    secret: 'zfpx'//密钥
}));
app.use(function (req, res, next) {
    //允许的来源
    //res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Origin', '*');
    //允许客户端请求的方法
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    //允许客户端发送的请求头
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //允许客户端发送Cookie
    res.header('Access-Control-Allow-Credentials', "true");
    //当客户端发向服务器发post跨域的时候，会先发送OPTIONS请求。如果服务器返回的响应头Access-Control-Allow-Methods里有POST的话，才会再次发送POST请求
    if (req.method == 'OPTIONS') {
        res.end();
    } else {
        next();
    }
});

//蛋糕列表接口
let cakes = require("./mock/cakes.json");

app.get("/cakes", function (req, res) {
    res.json(cakes);
});

//巧克力接口
let chocolates = require("./mock/chocolates.json");
app.get("/chocolates", function (req, res) {
    res.json(chocolates);
});

//花接口
let flowers = require("./mock/flowers.json");
app.get("/flowers", function (req, res) {
    res.json(flowers);
});

//礼物接口
let gifts = require("./mock/gifts.json");
app.get("/gifts", function (req, res) {
    res.json(gifts);
});

//推荐接口
let recmond = require("./mock/recmond.json");
app.get("/recmond", function (req, res) {
    res.json(recmond);
});

//轮播图
let sliders = require("./mock/sliders.json");
app.get("/sliders", function (req, res) {
    res.json(sliders);
});
//获取所有用户
app.get("/allUser", function (req, res) {
   fs.readFile('test.txt', function (err, data) {
      if (err)    return console.log(err);
      res.json(  data.toString());
  })
});
app.post("/register", function (req, res) {
  console.log(req.body);
  res.send({"state":"success"});
})
app.post("/login", function (req, res) {
  console.log(req.body);
  
  res.send({"登陆":(req.body)});
})

app.listen(3000, function () {
    console.log("端口 3000")
});

