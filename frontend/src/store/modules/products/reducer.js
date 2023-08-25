import ActionTypes from "./types";

const products = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.addNewProductRequest: {
      const { productTable, newProduct } = action.payload;
      return productTable.push({
        id: productTable.length + 1,
        dscproduct: newProduct.dscproduct,
        price: newProduct.price,
      });
    }
    case ActionTypes.removeProductRequest: {
      const { productTable, productId } = action.payload;
      const findProduct = productTable.findIndex(
        (item) => item.id === productId
      );

      if (findProduct >= 0) {
        productTable.splice(findProduct, 1);
        return productTable;
      }
      break;
    }
    case ActionTypes.editProductRequest: {
      const { productTable, productInfo } = action.payload;
      const findProduct = productTable.findIndex(
        (item) => item.id === productInfo.id
      );

      if (findProduct >= 0) {
        productTable[findProduct]["dscproduct"] = productInfo.dscproduct;
        productTable[findProduct]["price"] = productInfo.price;
        return productTable;
      }
      break;
    }
    default: {
      return state;
    }
  }
};

export default products;
