/**
 * Created by consultadd on 17/2/17.
 */
var exports = module.exports = {};
var express = require('express');
var router = express.Router();
var db = require('./dbconnect');


router.get('/',function(req,res){

    db.query('select * from customers',function(err,rows){
        if(err) throw err;
        res.render('view_customer',{'data':JSON.stringify(rows)})
        //res.send(rows);
    })

})

router.get('/add',function(req,res){
    res.render('add_customer');
})


router.post('/save',function(req,res){

    var data = { FirstName: req.body.name, LastName: req.body.lname ,Mobile:req.body.mobile};
    console.log(data)
    db.query('insert into customers set ?',data,function(err,ress){
        if(err) throw err;
        console.log('Last id:',ress.insertId);
        res.send("sccessfully added user");
    })
})


router.put('/update',function(req,res) {
   // var id = req.params.id;
    var id = 2;
    //var data = {first_name: req.body.name, last_name: req.body.lname, mobile: req.body.mobile};

    var data = {FirstName: "abc", LastName: "def", Mobile: 1234567890};

    db.query('update customers set ? where customer_id = ?', [data, id], function (err, rows) {

        if(err) throw err;
        console.log("updated")
    })
});


router.delete('/delete',function(req,res){

    var id =1;
    db.query('delete from customers where customer_id = ?',[id],function(err,rows)
    {
        if(err) throw err;
        console.log("deleted")
    })
})



module.exports = router;