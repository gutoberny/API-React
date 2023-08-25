import ActionTypes from "./types";

export function addNewProductRequest(productTable, newProduct) {
  return {
    type: ActionTypes.addNewProductRequest,
    payload: {
      productTable,
      newProduct,
    },
  };
}

export function removeProductRequest(productTable, productId) {
  return {
    type: ActionTypes.removeProductRequest,
    payload: {
      productTable,
      productId,
    },
  };
}

export function editProductRequest(productTable, productInfo) {
  return {
    type: ActionTypes.editProductRequest,
    payload: {
      productTable,
      productInfo,
    },
  };
}
