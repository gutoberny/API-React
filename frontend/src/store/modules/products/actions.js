import ActionTypes from "./types";

export function loadProductsRequest() {
  return {
    type: ActionTypes.loadProductsRequest,
  };
}

export function loadProductsSuccess(products) {
  return {
    type: ActionTypes.loadProductsSuccess,
    payload: products,
  };
}

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(loadProductsRequest());

    try {
      const response = await fetch(
        "https://back-api-react.onrender.com//products"
      );
      const data = await response.json();
      dispatch(loadProductsSuccess(data));
    } catch (error) {}
  };
}

export function addNewProductRequest(productTable, newProduct) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://back-api-react.onrender.com//product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );

      if (!response.ok) {
        return;
      }

      dispatch({
        type: ActionTypes.addNewProductRequest,
        payload: {
          productTable,
          newProduct,
        },
      });
    } catch (error) {}
  };
}

export function removeProductRequest(productTable, productId) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://back-api-react.onrender.com/product/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        return;
      }

      dispatch({
        type: ActionTypes.removeProductRequest,
        payload: {
          productTable,
          productId,
        },
      });
    } catch (error) {}
  };
}

export function editProductRequest(productTable, product) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://back-api-react.onrender.com/${product.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      if (!response.ok) {
        return;
      }

      dispatch({
        type: ActionTypes.editProductRequest,
        payload: {
          productTable,
          product,
        },
      });
    } catch (error) {}
  };
}
