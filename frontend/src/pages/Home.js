import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import { toast } from "react-toastify";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");

    if (response.status === 200) {
      setData(response.data);
    }
  };

  const onDeleteProduct = async (id) => {
    if (window.confirm("Você tem certeza que deseja deletar este produto?")) {
      const response = await axios.delete(
        `http://localhost:5000/product/${id}`
      );
      if (response.status === 200) {
        toast.success(response.data);
        getProducts();
      }
    }
  };
  return (
    <div style={{ marginTop: "150px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>N° Produto</th>
            <th style={{ textAlign: "center" }}>Descrição Produto</th>
            <th style={{ textAlign: "center" }}>Preço</th>
            <th style={{ textAlign: "center" }}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td className="dscproduct">{item.dscproduct}</td>
                <td className="price">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                  }).format(Number.parseFloat(item.price))}
                </td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">
                      <AiFillEdit />
                    </button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => onDeleteProduct(item.id)}
                  >
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
