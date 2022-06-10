const express=require('express');
const app=express();
const path=require('path');


app.use(express.static(path.join(__dirname, 'public')));



app.set('views',path.join(__dirname,'views'));
app.set("view engine", "ejs");



app.use('/',require('./routes'));




app.listen(3000,()=>{~
    console.log('server is running on port 3000');
}
);
