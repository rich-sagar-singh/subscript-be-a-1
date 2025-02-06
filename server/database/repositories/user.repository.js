const knex = require("../connection");

async function all() {
    return knex('users');
}

async function get(whereClause) {
    const results = await knex('users').where(whereClause);
    return results[0];
}

async function create(name, email, password, role, org_id) {
    const results = await knex('users').insert({ name, email, password, role, org_id }).returning('*');
    return results[0];
}

async function update(id, properties) {
    const results = await knex('users').where({ id }).update({ ...properties }).returning('*');
    return results[0];
}

async function del(id) {
    const results = await knex('users').where({ id }).del().returning('*');
    return results[0];
}


module.exports = {
    all,
    get,
    create,
    update,
    delete: del,
}