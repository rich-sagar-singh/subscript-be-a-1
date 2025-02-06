const knex = require("../connection");

async function all() {
    return knex('todos');
}

async function get(id) {
    const results = await knex('todos').where({ id });
    return results[0];
}

async function create(title, description, org_id, created_by, assigned_to=null) {
    const results = await knex('todos').insert({ title, description, org_id, created_by, assigned_to }).returning('*');
    return results[0];
}

async function update(id, properties) {
    const results = await knex('todos').where({ id }).update({ ...properties }).returning('*');
    return results[0];
}

async function del(id) {
    const results = await knex('todos').where({ id }).del().returning('*');
    return results[0];
}


module.exports = {
    all,
    get,
    create,
    update,
    delete: del,
}