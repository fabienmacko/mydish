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
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export const REMOVE_ITEMS_FROM_CART = 'REMOVE_ITEMS_FROM_CART';

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

    case REMOVE_ITEM_FROM_CART:
      let newCart = state.cart.slice();

      const dishToDelete = newCart.find((dish: CartProductInterface) => dish.id === action.idOfItemToRemove);
      const indexOfItemToDelete = newCart.indexOf(dishToDelete!);

      newCart.splice(indexOfItemToDelete, 1)
    
      return {
        ...state,
        cart: newCart,
      };

    case REMOVE_ITEMS_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((dish: CartProductInterface) => dish.id !== action.idOfItemsToRemove)
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

export const removeItemFromCart = (idOfItemToRemove: string) => ({
  type: REMOVE_ITEM_FROM_CART,
  idOfItemToRemove
})

export const removeItemsFromCart = (idOfItemsToRemove: string) => ({
  type: REMOVE_ITEMS_FROM_CART,
  idOfItemsToRemove
})

export default reducer;