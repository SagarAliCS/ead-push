const http = require('http');
const path=require('path');
var express=require('express');
const app=express();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var url=req.url;
  if(url ==='/about') {
    res.write(' Welcome to about us page'); 
    res.end(); 
                        }
else if(url ==='/contact') {
    res.write(' Welcome to contact us page'); 
    res.end(); 
                                }
else {
    res.write('Hello World!'); 
    res.end();
        } 
});

// Static Middleware
app.use(express.static(path.join(__dirname, 'public')));

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('Demo')
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// fs.readFile('node.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     else
//     console.log(data);
// });
