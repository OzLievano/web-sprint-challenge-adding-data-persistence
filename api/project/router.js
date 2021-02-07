// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model');
const router = express.Router();

router.get('/', function getAllProjects(req,res){
    Projects.getProjects()
        .then((projects)=>{
            const changingProjects = projects.map((project)=>{
                const convertedProject = {
                    ...project, 
                    ["project_completed"]: project["project_completed"] === 0 ? false : true
                }
                return convertedProject
            })
            res.status(200).json(changingProjects);
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
                if(!newProject.project_completed && !newProject.project_description){
                    res.status(201).json({...newProject, "project_completed":false,"project_description":null})
                }else{
                    res.status(201).json({...newProject,"project_completed":Boolean(newProject.project_completed),"project_description":null})
                }
            })
            .catch((err)=>{
                res.status(500).json({error:err.message})
            })
    }
})

module.exports = router;
