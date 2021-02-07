// build your `Task` model here
const db = require('../../data/dbConfig');


module.exports = {
    getTasks,
    createTask
}

async function getTasks(){
    return await db('tasks');
}

async function createTask(data){
    return await db('tasks').insert(data);
}