import { persistentStore } from 'redux-pouchdb';
import PouchDB from 'pouchdb';

const db = new PouchDB('frc_scoutingpi');

// optional
const applyMiddlewares = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
);

const createStoreWithMiddleware = compose(
    applyMiddlewares,
    persistentStore(db),
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);
