import PouchDB from 'pouchdb';
import PouchMiddleware from 'pouch-redux-middleware';
import { createStore, applyMiddleware } from 'redux';
import * as types from '../constants/ActionTypes';
import rootReducer from '../reducers';

export default function configureStore() {
  const db = new PouchDB('frc_scoutingpi');

  const pouchMiddleware = PouchMiddleware({
    path: '/todos',
    db,
    actions: {
      remove: doc => { return { type: types.DELETE_TODO, id: doc._id }; },
      insert: doc => { return { type: types.INSERT_TODO, todo: doc }; },
      update: doc => { return { type: types.UPDATE_TODO, todo: doc }; },
    },
  });

  const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(pouchMiddleware),
  );

  return store;
}
