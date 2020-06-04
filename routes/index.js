const express = require('express');
const router = express.Router();

const Task= require('../models/tasks')

router.get('/',function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log('There is an error while fetching contacts from database.');
            return;
        }
        return res.render('index',{tasks:tasks});
    })
})

router.post('/create-task', function(req,res){
    Task.create({
        task:req.body.task,
        category: req.body.category,
        duedate: req.body.duedate
    }, function(err,newTask){
        if(err){
            console.log('there is an error while saving the data into datbase');
            return;
        }
        console.log('*******',newTask);
        return res.redirect('/')
    });
});

router.get('/delete-task/:id',function(req,res){
    id = req.params.id;
    Task.findByIdAndDelete(id,function(err){
        if(err){
            console.log('there is an error while delete the task from the database of taskmanager. Please try again later',err);
            return;
        }
        return res.redirect('/');
    })
})

module.exports = router