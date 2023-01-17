const express =require("express");
const db=require('./mongooose/mongoose');
const contact=require('./model/contact');
const app=express();
const path=require('path');
const viewpath=path.join (__dirname,'view');
console.log(viewpath)
app.use(express.urlencoded({extended:false}));



app.set('views',viewpath)
app.set('view engine','ejs');
const port=3000;


 var contactlist=[
    
    {
        name:'shakir',
        phone:7899638525
    

    }

]


app.get('/',function(req,res){


    contact.find({},function(err,contacts){
        if(err){
            console.log("error in fetching contackt")
        }

        res.render('contact',{
            title:'shakir again',
            contact_list:contacts
          });
    })
 
})


app.post('/add_number',function(req,res){


    contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,new_contact){
        if(err){
        console.log("errr in creating the contact")
        return ;
        }
console.log("contatc is created");
res.redirect('back');
    })

    // console.log(req.body);
    // contactlist.push(req.body)
    // res.redirect('back');
})

app.get('/delete/:id',function(req,res){

//    var index= contactlist.findIndex(contact=>contact.phone==req.params.phone);
//     console.log(index);
//     contactlist.splice(index,1);
//     res.redirect('back');
const id=req.params.id

contact.findByIdAndDelete(id,function(err){
    if(err){
        console.log("error in deleting the contact from the db");
    }

    res.redirect('back');
})

})

app.listen(port,function(err){
    if(err){
        console.log("error in starting the server");
    }
    console.log("******server is started*****");
})
