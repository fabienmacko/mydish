    
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
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}


// createStore
const store = createStore(reducer);

/*
 * Export
 */
export default store;