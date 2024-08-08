const express = require('express')
const app = express();
const path = require('path');
const errorHandler=require('./middleware/errorHandler')
const cors = require('cors');
const corOptions= require('./config/corsOption')
const {logger} = require('./middleware/logEvent')
const PORT = process.env.PORT || 3500;

// Custom middleware Req
app.use(logger)
//Cross Origin Resource Sharing

app.use(cors(corOptions))
 


// Built-In MiddleWare 
//for form data
app.use(express.urlencoded({extended:false}))

//for json data
app.use(express.json())

//serve css on static pages
app.use('/',express.static(path.join(__dirname,'/public')))

app.use('/',require('./routes/root'))
app.use('/employees',require('./routes/api/employees.js'))

app.all('*',(req,res)=>{
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'));

    }
    else if(req.accepts('json')){
        res.json({error:"404 Page Not Foundd"});

    }else{
        res.type('txt').send('Noo suchh')
    }

})

app.use(errorHandler)

app.listen(PORT,()=> console.log(`server is running on ${PORT}`))
