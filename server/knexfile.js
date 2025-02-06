module.exports = {
    client: 'pg',
    connection: {
      host:"127.0.0.1",
      database:"postgres",
      user:    "postgres",
      password:"postgres",
      port:5432
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    debug: true,
    pool: {
      min: 1,
      max: 2000000,
      afterCreate: (conn, done) => {
        done();
      }
    },
};
