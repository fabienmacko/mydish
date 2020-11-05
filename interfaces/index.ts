export interface State {
  food: [],
};

export interface Food {
  category: string,
  imagePath: string
};

export interface Action {
  type: string
}