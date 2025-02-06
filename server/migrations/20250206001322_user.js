exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary(); 
      table.string('name').notNullable(); 
      table.string('role').notNullable(); 
      table.string('email').notNullable(); 
      table.string('password').notNullable(); 
      table.integer('org_id').unsigned().references('id').inTable('organizations').onDelete('CASCADE'); 
      table.timestamps(true, true); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
  