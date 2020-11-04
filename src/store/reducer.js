/**
 * Initial State
 */
const initialState = {
  food: [
    {
      category: "Pizzas",
      imagePath: "https://recipecontent.fooby.ch/18070_3-2_1560-1040.jpg",
      items: [
        {
          name: 'Italia',
          ingredients: ['Tomate', 'Mozza', 'Roquette', 'Jambon'],
          price: 13,
          productId: 33
        },
        {
          name: 'Calzone',
          ingredients: ['Tomate', 'Mozza', 'Oeuf', 'Jambon'],
          price: 11,
          productId: 34
        },
        {
          name: 'Salmon',
          ingredients: ['Tomate', 'Mozza', 'Roquette', 'Saumon'],
          price: 14,
          productId: 35
        }
      ],
    },
    {
      category: "Burgers",
      imagePath: "https://i.f1g.fr/media/madame/1900x1900/sites/default/files/img/2017/03/burger-maison.jpg",
      items: [
        {
          name: 'Italia',
          ingredients: ['Tomate', 'Mozza', 'Roquette', 'Jambon'],
          price: 13,
          productId: 33
        },
        {
          name: 'Calzone',
          ingredients: ['Tomate', 'Mozza', 'Oeuf', 'Jambon'],
          price: 11,
          productId: 34
        },
        {
          name: 'Salmon',
          ingredients: ['Tomate', 'Mozza', 'Roquette', 'Saumon'],
          price: 14,
          productId: 35
        }
      ],
    },
    {
      category: "Pastas",
      imagePath: "https://assets.afcdn.com/recipe/20180628/80089_w1024h1024c1cx1944cy2592.webp",
      items: [
        {
          name: 'Italia',
          ingredients: ['Tomate', 'Mozza', 'Roquette', 'Jambon'],
          price: 13,
          productId: 33
        },
        {
          name: 'Calzone',
          ingredients: ['Tomate', 'Mozza', 'Oeuf', 'Jambon'],
          price: 11,
          productId: 34
        },
        {
          name: 'Salmon',
          ingredients: ['Tomate', 'Mozza', 'Roquette', 'Saumon'],
          price: 14,
          productId: 35
        }
      ],
    },
  ]
};

/**
 * Types
 */
export const OPEN_MENU = 'OPEN_MENU';



/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        isMenuOpen: true,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */


export const increaseClickCounter = () => ({
  type: OPEN_MENU
})




/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;