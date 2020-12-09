import {getProducts} from '../utils/localStorageProducts';
import {CartProductInterface} from '../../interfaces';

export interface StateInterface {
  cart: CartProductInterface[]
}

/**
 * Initial State
 */

const initialState = {
  cart: getProducts()
};

/**
 * Types
 */

export const ADD_NEW_ITEM_TO_CART = 'ADD_NEW_ITEM_TO_CART';

/**
 * Reducer
 */
const reducer = (state: StateInterface = initialState, action: any = {}) => {
  switch (action.type) {
    case ADD_NEW_ITEM_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          action.newItem
        ],
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const addNewItemToCart = (newItem: CartProductInterface[]) => ({
  type: ADD_NEW_ITEM_TO_CART,
  newItem
})

export default reducer;