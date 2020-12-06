import CartProduct from "../components/Client/Cart/CartProduct";

interface Dish {
  id: string,
  name: string,
  price: number,
  imagePath: string
};

export const addProduct = ({id, name, price, imagePath}: Dish) => {
  let cart = [];

  if (localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart')!);
  }

  cart.push({id, name, price, imagePath});
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const removeProduct = (id: string) => {
  let cart = [];

  if (localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart')!);
  }

  const dishToDelete = cart.find((dish: Dish) => dish.id === id);
  const indexOfItemToDelete = cart.indexOf(dishToDelete);

  cart.splice(indexOfItemToDelete, 1);
  
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const getProductById = (id: string) => {
  if (localStorage.getItem('cart')){
    return JSON.parse(localStorage.getItem('cart')!).filter((dish: Dish) => dish.id === id);
  }
}

export const getUniqueProducts = () => {
  if (localStorage.getItem('cart')) {
    let cartProducts = JSON.parse(localStorage.getItem('cart')!)
    
    let uniqueProducts: Dish[] = [];

    cartProducts.forEach((cartProduct: Dish) => {

      let isProductUnique = true;

      uniqueProducts.forEach((uniqueProduct: Dish) => {
        if (uniqueProduct.id === cartProduct.id) {
          isProductUnique = false;
        }
      });

      if (isProductUnique) {
        uniqueProducts.push(cartProduct);
      }
    });
    

    return uniqueProducts;
  }
}

export const getProducts = () => {
  if (localStorage.getItem('cart')) {
    return JSON.parse(localStorage.getItem('cart')!);
  }
}