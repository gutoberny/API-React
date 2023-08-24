import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddEdit.css";
import { toast } from "react-toastify";

const initialState = {
  dscproduct: "",
  price: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { dscproduct, price } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleProduct(id);
    }
  }, [id]);

  const getSingleProduct = async (id) => {
    const response = await axios.get(`http://localhost:5000/product/${id}`);
    if (response.status === 200) {
      setState({ ...response.data[0] });
    }
  };

  const addProduct = async (data) => {
    const response = await axios.post("http://localhost:5000/product", data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const updateProduct = async (data, id) => {
    const response = await axios.put(
      `http://localhost:5000/product/${id}`,
      data
    );
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dscproduct || !price) {
      toast.error("Preencha todos os campos");
    } else {
      if (!id) {
        addProduct(state);
      } else {
        updateProduct(state, id);
      }

      setTimeout(() => navigate("/"), 500);
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="dscproduct">Nome do Produto</label>
        <input
          type="text"
          id="dscproduct"
          name="dscproduct"
          placeholder="Digite o Nome do Produto"
          onChange={handleInputChange}
          value={dscproduct}
        />
        <label htmlFor="dscproduct">Preço do Produto</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Digite o Preço do Produto"
          onChange={handleInputChange}
          value={price}
        />
        <input type="submit" value={id ? "Atualizar" : "Adicionar"} />
      </form>
    </div>
  );
};

export default AddEdit;
