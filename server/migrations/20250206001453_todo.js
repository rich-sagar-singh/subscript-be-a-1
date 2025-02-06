exports.up = function(knex) {
    return knex.schema.createTable('todos', function(table) {
      table.increments('id').primary(); 
      table.string('title').notNullable(); 
      table.string('description').notNullable(); 
      table.integer('org_id').unsigned().references('id').inTable('organizations').onDelete('CASCADE'); 
      table.integer('created_by').unsigned().references('id').inTable('users').onDelete('CASCADE'); 
      table.integer('assigned_to').unsigned().references('id').inTable('users').onDelete('CASCADE'); 
      table.timestamps(true, true); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('todos');
  };
  