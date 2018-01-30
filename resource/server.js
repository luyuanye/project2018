<<<<<<< HEAD
﻿let express = require("express");
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();
app.use(bodyParser.json());
app.use(session({
    resave: true,//每次访问都重新保存session
    saveUninitialized: true,//保存未初始化的session
    secret: 'zfpx'//密钥
}));
app.use(bodyParser.json());
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

//获取首页 列表 && 轮播图
//let HList = require("./mock/HList");
//let food = require("./mock/food.json");
//let search = require("./mock/search.json");
//let friend = require("./mock/friend.json");
//let foodList = require("./mock/foodList.json");

//app.get("/hlist", function (req, res) {
//  res.json(HList);
//});
//app.get('/star', function (req, res) {
//  res.json(food[req.query.index]);
//});
//app.get('/search', function (req, res) {
//  res.json(search);
//});
//app.get('/friend', function (req, res) {
//  res.json(friend);
//});
//
//let Lesson = require("./mock/Lesson");
//
////获取列表页课程数据
//app.get('/lesson', function (req, res) {
//  res.json(Lesson);
//
//});
//
//app.post('/search', function (req, res) {
//
//});
//app.post('/searchIndex', function (req, res) {
//
//});
//
////注册用户信息
//let users = require('./mock/users.json');
//
//
//app.post('/register', function (req, res) {});
//
////登录
//app.post('/login', function (req, res) {});
//
////验证登录态，如果已经登录则返回登录的用户并存放在仓库里
//app.get('/validate', function (req, res) {});
//
////退出登录 退出时code为1 并且跳转到首页
//app.get('/signout', function (req, res) {});
//
//
////获取课程包优选课程列表数据
//let lessonsPrefer = require('./mock/lessons-prefer');
//app.get('/lessonPrefer', function (req, res) {
//});
////获取教程列表详情页数据
//let detailList = require('./mock/detailList.json');
//// console.log(detailList.detailList);
//app.post('/detail', function (req, res) {});
////增加个人作品,
//app.post('/works', function (req, res) {});
////增加草稿,
//app.post('/draft', function (req, res) {});
////获取用户信息
//app.get('/works', function (req, res) {});
////获取其他用户的信息
//app.post('/getOthers', function (req, res) {});
////登录成功后获取当前用户的收藏详情
//app.post('/getCollections', function (req, res) {});
////返回用户收藏数
//app.post('/collect', function (req, res) {});
////删除用户评论
//app.post('/delete', function (req, res) {});
////增加用户评论
//app.post('/add', function (req, res) {});
app.listen(5000, function () {
    console.log("端口 4000")
});
=======
﻿let express = require("express");
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

//轮播图
let sliders = require("./mock/sliders.json");
app.get("/sliders", function (req, res) {
    res.json(sliders);
});
app.post('/login',function (req, res,next) {
    var body='';
    req.on('data', function (chunk) {
        body += chunk;  
        console.log("chunk:",chunk);
        console.log("body:", body);
        fs.writeFile(__dirname + '/test.txt',body, {flag: 'a'}, function (err) {
        if(err) {
        console.error(err);
        } else {
         console.log('写入成功');
        }
      });
    });
    req.on('end', function () {
     	console.log(JSON.stringify(body))
     	console.log(body);
        
        res.json({"state":"success"});
    });
    
});
//注册用户接口
app.post('/register',function (req, res,next) {
    var body='';
    req.on('data', function (chunk) {
        body += chunk;  
        console.log("chunk:",chunk);
        console.log("body:", body);
        fs.writeFile(__dirname + '/test.txt',body, {flag: 'a'}, function (err) {
        if(err) {
        console.error(err);
        } else {
         console.log('写入成功');
        }
      });
    });
    req.on('end', function () {
     	console.log(JSON.stringify(body))
     	console.log(body);
        
        res.json({"state":"success"});
    });
    
});

app.listen(3000, function () {
    console.log("端口 3000")
});
>>>>>>> e89f50f... bug fiesd
