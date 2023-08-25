import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  addNewProductRequest,
  editProductRequest,
} from "../store/modules/products/actions";
import DeleteModal from "../components/DeleteModal";
import "./Home.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [addProduct, setAddProduct] = useState(false);
  const [edit, setEdit] = useState(false);
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState({
    dscproduct: "",
    price: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleOpenModal = (id) => {
    console.log(id);
    setProductId(id);
    document.getElementsByClassName("modal")[0].style.display = "flex";
  };

  const handleCreateNewProduct = useCallback(() => {
    dispatch(addNewProductRequest(products, product));
    setTimeout(() => setAddProduct(false), 1000);
  }, [dispatch, products, product]);

  const handleEditProduct = useCallback(() => {
    dispatch(editProductRequest(products, product));
    setTimeout(() => setEdit(false), 1000);
  }, [dispatch, product, products]);

  const handleEdit = (product) => {
    setEdit(true);
    setProduct({
      id: product.id,
      dscproduct: product.dscproduct,
      price: product.price,
    });
  };

  return (
    <>
      {addProduct ? (
        <section className="form container">
          <main>
            <div className="form-body">
              <div className="input-container">
                <div className="input-row">
                  <label htmlFor="dscproduct">Nome do Produto</label>
                  <input
                    id="dscproduct"
                    type="text"
                    onChange={(e) =>
                      setProduct({ ...product, dscproduct: e.target.value })
                    }
                    placeholder="Digite o Nome do Produto"
                  />
                </div>
                <div className="input-row">
                  <label htmlFor="price">Preço</label>
                  <input
                    id="price"
                    type="text"
                    onChange={(e) =>
                      setProduct({ ...product, price: e.target.value })
                    }
                    placeholder="Digite o Preço"
                  />
                </div>
              </div>
              <div className="send-container">
                <button
                  className="cancel-btn"
                  onClick={() => setAddProduct(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="submit-button"
                  onClick={handleCreateNewProduct}
                >
                  Submit
                </button>
              </div>
            </div>
          </main>
        </section>
      ) : edit ? (
        <section className="form container">
          <header>
            <h2>Form</h2>
          </header>
          <main>
            <div className="form-body">
              <div className="input-container">
                <div className="input-row">
                  <label htmlFor="dscproduct">Nome do Produto</label>
                  <input
                    id="dscproduct"
                    type="text"
                    value={product.dscproduct}
                    onChange={(e) =>
                      setProduct({ ...product, dscproduct: e.target.value })
                    }
                    placeholder="Digite o Nome do Produto"
                  />
                </div>
                <div className="input-row">
                  <label htmlFor="price">Preço</label>
                  <input
                    id="price"
                    type="text"
                    value={product.price}
                    onChange={(e) =>
                      setProduct({ ...product, price: e.target.value })
                    }
                    placeholder="Digite o Preço"
                  />
                </div>
              </div>
              <div className="send-container">
                <button
                  className="cancel-button"
                  onClick={() => setEdit(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="submit-button"
                  onClick={handleEditProduct}
                >
                  Submit
                </button>
              </div>
            </div>
          </main>
        </section>
      ) : (
        <section className="product-list container">
          <header>
            <div className="input-group">
              <h2>Listagem de Produtos</h2>

              <button
                className="add-new-button"
                onClick={() => setAddProduct(true)}
              >
                Add new
              </button>
            </div>
          </header>
          <main>
            {products.length === 0 ? (
              <span>Nenhum produto para listar.</span>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nome do Produto</th>
                    <th>Preço</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => (
                    <>
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td className="dscproduct">{item.dscproduct}</td>
                        <td className="price">
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                            minimumFractionDigits: 2,
                          }).format(Number.parseFloat(item.price))}
                        </td>
                        <td align="center" className="button-column">
                          <button
                            className="btn btn-edit"
                            type="submit"
                            style={{ backgroundColor: "orange" }}
                            onClick={() => handleEdit(item)}
                          >
                            <AiFillEdit />
                          </button>
                          <button
                            className="btn btn-delete"
                            type="submit"
                            style={{ backgroundColor: "red" }}
                            onClick={() => handleOpenModal(item.id)}
                          >
                            <AiFillDelete />
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            )}
          </main>
        </section>
      )}
      <DeleteModal products={products} productId={productId} />
    </>
  );
};

export default ProductsContainer;
