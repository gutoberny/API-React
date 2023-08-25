import ActionTypes from "./types";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.loadProductsRequest:
      return state;
    case ActionTypes.loadProductsSuccess:
      return {
        ...state,
        products: action.payload,
      };
    case ActionTypes.addNewProductRequest:
      return state;
    case ActionTypes.removeProductRequest:
      return state;
    case ActionTypes.editProductRequest:
      return state;
    default: {
      return state;
    }
  }
};

export default productsReducer;
