import { v4 as uuid } from "uuid";

let products = [
  {
    id: uuid(),
    dscproduct: "Camisa Polo Tam M",
    price: 249.49,
  },
  {
    id: uuid(),
    dscproduct: "Tenis esportivo Tam 42",
    price: 499.90,
  },
];

export const getProducts = (req, res) => {
  return res.json(products);
};

export const createProduct = (req, res) => {
  const product = req.body;

  products.push({ ...product, id: uuid() });
  res.send("Produto adicionado com sucesso!");
};

export const getProduct = (req, res) => {
  const product = products.filter((product) => product.id === req.params.id);

  res.send(product);
};

export const deleteProduct = (req, res) => {
  products = products.filter((product) => product.id !== req.params.id);

  res.send("Produto deletado com sucesso");
};

export const updateProduct = (req, res) => {
  const product = products.find((product) => product.id === req.params.id);

  product.dscproduct = req.body.dscproduct;
  product.price = req.body.price;
  res.send("Produto alterado com sucesso!");
};
