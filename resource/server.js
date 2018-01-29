let express = require("express");
let app = express();
let session = require('express-session') //session中间件
app.listen(4000);
let bodyParser = require('body-parser')
app.use(bodyParser.json()) // 解析请求体的中间件 req.body上为解析后的结果
app.use(session({
    resave: true, // 每次重新保存
    secret: 'zfpx',
    saveUninitialized: true,
}))  // req.session 进行设置内容了
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
});
let axios = require('axios');
//想访问珠峰的网站 访问我的服务，我的服务访问珠峰的服务，把数据返回给我的前端
//轮播图

app.get('/sliders', function (request, response) {
    axios.get("./mock/sliders").then(function (res) {
        response.json(res.data.module);
    })
});
