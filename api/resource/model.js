// build your `Resource` model here
const db = require('../../data/db-config');


module.exports = {
    createResource
}

async function createResource(data){
    return await db('resources').insert(data);
}