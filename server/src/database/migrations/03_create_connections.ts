import knex from 'knex';

export async function up(knex: knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: knex){
    return knex.schema.dropTable('connections');
}