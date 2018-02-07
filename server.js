//引入http模块
var http = require("http");
//引入url模块
var urls = require("url");
//引入querystring模块
var qs = require("querystring");
//引入fs模块
var fs = require("fs");

http.createServer(function(req,res){
       var urll = urls.parse(req.url);
       var path = urll.pathname;
       if(path == "/favicon.ico"){
            res.end();
       }else{
       	
       	   res.setHeader("Access-Control-Allow-Origin","*");
       	   res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
            fs.readFile("data/one.json",function(err,data){
                if(!err){
                	res.write(data);
                	res.end();
                }
            });
       }
}).listen(9992);
console.log("服务器已启动...");
