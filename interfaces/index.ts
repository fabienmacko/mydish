export interface State {
  food: [],
};

export interface Food {
  id: string,
  category: string,
  imagePath: string
};

export interface Action {
  type: string
}

export interface Dish {
  id: string,
  name: string,
  price: number,
  imagePath: string,
  ingredients: string[]
}

export interface ProductInterface {
  id: string,
  name: string,
  price: number,
  imagePath: string,
  ingredients: string[],
  fadeDirection: string
}