// do not make changes to this file (except to optionally add seeds)
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connections:{
    filename:'./data/projects.db3'
  },
  migrations: { directory: './data/migrations' },
  pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/lambda.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' },
  },
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    },
  }
};
