// build your `/api/resources` router here
const Resources = require('./model')

const express = require('express');

const router = express.Router();

router.get('/',function getAllResources(req,res){
    Resources.getResources()
        .then((resources)=>{
            res.status(200).json(resources)
        })
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
})

router.post('/',function createResources(req,res){
    const newResource = req.body;

    const existingResources = Resources.getResources()
    console.log(existingResources.data)
    if(!newResource.resource_name){
        res.status(400).json({error:"please include a resource name"})
    }else{
        Resources.createResource(newResource)
        .then((resource)=>{
            res.status(201).json(newResource)
        })
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
    }
})

module.exports = router;