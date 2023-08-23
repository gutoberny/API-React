import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import productRoutes from "./routes/products.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", productRoutes);

app.get("/", (req, res) => res.send("Uuup!"));
app.all("*", (req, res) => res.send("Página não encontrada"));


app.listen(port, () => console.log(`Server listening on port: http://localhost:${port}`));