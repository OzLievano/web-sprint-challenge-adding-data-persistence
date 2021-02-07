// build your `Project` model here
const db = require('../../data/db-config');

module.exports = {
    getProjects,
    createProject
}

async function getProjects(){
    return await db('projects');
}

async function createProject(data){
    return await db('proojects').insert(data);
}