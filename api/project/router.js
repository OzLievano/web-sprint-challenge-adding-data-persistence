// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model');
const router = express.Router();

router.get('/', function getAllProjects(req,res){
    Projects.getProjects()
        .then((projects)=>{
            res.status(200).json(projects);
        })
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
})

router.post('/',function createProjects(req,res){
    const newProject = req.body;

    if(!newProject.project_name){
        res.status(400).json({error:"Please provide a project name"})
    }else{
        Projects.createProject(newProject)
            .then((projects)=>{
                res.status(201).json(newProject)
            })
            .catch((err)=>{
                res.status(500).json({error:err.message})
            })
    }
})

module.exports = router;
