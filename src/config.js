const packjson = require('../package.json');

const config = {
  appEnv: 'dev',  // feel free to remove the appEnv property,
  appVersion: packjson.version,

  domain: 'localhost',
  port: 3000,

  // Couchdb remote database
  POUCHDB_OFFLINE_ENABLED: true,
  COUCHDB_SERVER: 'http://192.168.1.97:5984/frc_scoutingpi',
};

export default Object.freeze(Object.assign({}, config));
