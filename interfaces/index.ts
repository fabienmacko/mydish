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