import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProductRequest } from "../store/modules/products/actions";

import "./modal.css";

const DeleteModal = ({ products, productId }) => {
  const dispatch = useDispatch();
  const [setProducts] = useState([]);

  const handleCloseModal = () => {
    document.getElementsByClassName("modal")[0].style.display = "none";
  };

  const handleRemoveProduct = () => {
    dispatch(removeProductRequest(products, productId));
    setTimeout(
      () =>
        (document.getElementsByClassName("modal")[0].style.display = "none"),
      1000
    );
    return products;
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
