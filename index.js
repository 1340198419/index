//1,引入express
var express = require('express');
var app = express();
var path = require('path');
//2,引入的ejs插件
var ejs = require('ejs');
//3,设置html引擎
app.set('view engine', 'html');
//4,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//5,设置ejs引擎
app.engine('html', require('ejs').__express);
//6,静态文件
app.use(express.static('public'));

var indexController = require('./Controllers/IndexController');
app.get('/index',indexController.index);
app.get('/checkout',indexController.checkout);
app.get('/furniture',indexController.furniture);
app.get('/login',indexController.login);
app.get('/mail',indexController.mail);
app.get('/products',indexController.products);
app.get('/register',indexController.register);
app.get('/short-codes',indexController.codes);
app.get('/single',indexController.single);


app.listen(8888,function(){
    console.log('111')
});