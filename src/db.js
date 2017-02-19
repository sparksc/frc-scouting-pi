// Start Pouchdb API
import PouchDB from 'pouchdb';
import PouchRelational from 'relational-pouch';

import config from './config';
import store from './store';
import actions from './actions';
import models from './models';

PouchDB.plugin(PouchRelational);
PouchDB.debug.enable('pouchdb:http');

// db sync
let remote_db = new PouchDB(config.COUCHDB_SERVER, { skip_setup: true });
let local_db = undefined;

// Offline first
if (config.POUCHDB_OFFLINE_ENABLED) {
  local_db = new PouchDB('frc_scoutingpi');

  /*
   * Enable sync with remote
   */
  const syncEvents = ['change', 'paused', 'active', 'denied', 'complete', 'error'];
  const clientEvents = ['connect', 'disconnect', 'reconnect'];

  console.group('db', 'Replicate REMOTE_DB to LOCAL_DB');
  remote_db.replicate.to(local_db, { live: true });

  /*
  .on('change', (change) => {
    console.log(" • PouchDB change", change);
  }).on('paused', (info) => {
    console.log(" ‹ PouchDB sync paused ", info);
  }).on('active', (info) => {
    console.log(" › PouchDB sync active ", info);
  }).on('complete', () => {
    console.info(" ✓ PouchDB synced ");
  }).on('error', function(err){
    console.error(" Error syncing PouchDB from ", config.POUCHDB_SERVER);
    console.error(err.message);
    console.trace(err);
    console.groupEnd('db');
  });
  */

  var changes = local_db.changes({
    since: 'now',
    live: true,
    include_docs: true
  }).on('change', function (change) {
    // handle change
    console.log('change', change)
  }).on('complete', function (info) {
    // changes() was canceled
    console.log('complete', info)
  }).on('error', function (err) {
    console.log(err);
  });
} else {
  local_db = remote_db;
}

// strict schema
let db = local_db;
models.setDbSchema(db);
window.models = models;

window.PouchDB = PouchDB;
window.remote_db = remote_db;
window.db        = db;
window.users_db  = new PouchDB(config.POUCHDB_USERS, { skip_setup: true });

window.start = function () {
  /*
   * Check connectivity to database
   */
  window.db.info().then( () => {
    // db successfully ready
    console.info('pouchdb is ready to rock');
    store.dispatch(actions.pouch.dbReady(window.db));
  }).catch((err) => {
    console.error('Could not connect at the moment to our database servers...', err);
    store.dispatch(actions.pouch.dbError(err));
  });
};
