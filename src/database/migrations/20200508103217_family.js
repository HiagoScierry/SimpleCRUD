
exports.up = function(knex) {
    return knex.schema.createTable('family', function(table){
        table.increments('id'),
        table.string('name').notNullable
        table.string('surname').notNullable
        table.string('years').notNullable
        table.string('city').notNullable
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('family')  
  };
  