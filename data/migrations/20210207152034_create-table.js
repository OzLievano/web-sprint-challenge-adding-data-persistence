
exports.up = function(knex) {
  return knex.schema.createTable('projects',tbl => {
        tbl.increments();
        tbl.string('project_name',128).notNullable();
        tbl.string('project_description',128);
        tbl.boolean('project_completed').defaultTo(false);
    })
    .createTable('tasks',tbl => {
        tbl.increments();
        tbl.string('task_description',128).notNullable();
        tbl.string('notes',128);
        tbl.boolean('task_completed').defaultTo(false);
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name',128);
        tbl.string('resource_description',128);
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resources').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
