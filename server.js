const express=require('express');
const hbs= require('hbs')
var app= express();
app.set('view engine','hbs')
app.use(express.static(__dirname+'/public'))
hbs.registerPartials(__dirname+'/partials')
app.get('/homepage',(req,res)=>{
    res.send('<h1>HELLO FROM THE SERVER Home Page</h1>');
})
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        name:'karim'
    });
})
app.listen(3000)