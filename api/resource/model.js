// build your `Resource` model here
const db = require('../../data/db-config');


module.exports = {
    getResources,
    createResource
}

async function getResources(){
    return await db('resources');
}

async function createResource(data){
    return await db('resources').insert(data);
}