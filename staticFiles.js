const express=require('express');
const path=require('path');
const app=express();

//using static middleware
app.use(express.static(path.join(__dirname,'/public')));

//view engine setup.
app.set('views',path.join(__dirname,'Views'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    var student={
        'name':'sagar',
        'university':'Sukkur IBA',
        'department':'cs'
    };
    res.render('Demo',{'student':student});
});
app.get('/about',(req,res)=>{
    res.render('about');
});

app.listen(3030, function(err){
    if(err) throw err;
    console.log("Server created Successfully")
});