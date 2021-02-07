// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Tasks = require('./model')


router.get('/',function getAllTaks(req,res){
    Tasks.getTasks()
        .then((tasks)=>{
            res.status(200).json(tasks)
        })
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
})

router.post('/',function createTasks(req,res){
    const newTask = req.body;

    if(!newTask.task_description){
        res.status(400).json({error:"please include a resource name"})
    }else{
        Tasks.createTask(newTask)
        .then((tasks)=>{
            res.status(201).json(newTask)
        })
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
    }
})

module.exports = router;