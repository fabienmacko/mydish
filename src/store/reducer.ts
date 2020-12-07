import {getProducts} from '../utils/localStorageProducts';
import {Dish} from '../../interfaces';

export interface StateInterface {
  cart: Dish[]
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

export const UPDATE_CART = 'UPDATE_CART';

/**
 * Reducer
 */
const reducer = (state: StateInterface = initialState, action: any = {}) => {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        foods: action.foods,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const updateCart = (newCart: Dish[]) => ({
  type: UPDATE_CART,
  newCart
})

export default reducer;