import {gql} from '@apollo/client';

export const GET_FOOD = gql`
  query getFood($category: String!) {
    food(category: $category){
      category
      imagePath
      dishs{
        id
        name
        price
        ingredients
        imagePath
      }
    }
  }
`;

export const GET_FOODS = gql`
query {
  foods{
    id
    category
    imagePath
    dishs{
      name
      price
    }
  }
}
`;