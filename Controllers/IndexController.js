exports.index=function(req, res){
    res.render('index',{});
};
exports.checkout=function(req, res){
    res.render('checkout',{});
};
exports.furniture=function(req, res){
    res.render('furniture',{});
};
exports.login=function(req, res){
    res.render('login',{});
};
exports.mail=function(req, res){
    res.render('mail',{});
};
exports.products=function(req, res){
    res.render('products',{});
};
exports.register=function(req, res){
    res.render('register',{});
};
exports.codes=function(req, res){
    res.render('short-codes',{});
};
exports.single=function(req, res){
    res.render('single',{});
};
