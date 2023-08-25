import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchProducts,
  removeProductRequest,
} from "../store/modules/products/actions";

import "./modal.css";

const DeleteModal = ({ products, productId }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    document.getElementsByClassName("modal")[0].style.display = "none";
  };
  const handleRemoveProduct = async () => {
    const product = products.find((item) => item.id === productId);
    if (!product) {
      return;
    }

    await dispatch(removeProductRequest(products, productId));
    dispatch(fetchProducts());

    handleCloseModal();
  };

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">Deletar Produto</div>
        <div className="modal-body">
          <span>Tem certeza que deseja deletar esse produto?</span>
        </div>
        <div className="modal-actions">
          <button
            type="submit"
            className="cancel-button"
            onClick={() => handleCloseModal()}
          >
            Cancelar
          </button>
          <button
            className="delete-button"
            onClick={() => handleRemoveProduct()}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
