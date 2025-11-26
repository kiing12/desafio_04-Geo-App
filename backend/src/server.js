require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const registroRoutes = require("./routes/registro.routes");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/registro", registroRoutes);

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));
// const app = express();