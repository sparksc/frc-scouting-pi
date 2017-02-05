import cart from './cart';
import { combinReducers } from 'redux';

const rootReducer = combinReducers({
    cart
});

export default rootReducer;
