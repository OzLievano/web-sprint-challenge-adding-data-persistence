// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Tasks = require('./model')


router.get('/',function getAllTaks(req,res){
    Tasks.getTasks()
        .then((tasks)=>{
            const changingTasks = tasks.map((task)=>{
                const convertedTask = {
                    ...task, 
                    ["task_completed"]: task["task_completed"] === 0 ? false : true
                }
                return convertedTask
            })
            res.status(200).json(changingTasks)
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