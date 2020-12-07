    
/*
 * Npm import
 */
import { createStore } from 'redux';

/*
 * Local import
 */
// Reducer
import reducer from './reducer';
/*
 * Code
 */


// createStore
const store = createStore(reducer);

/*
 * Export
 */
export default store;