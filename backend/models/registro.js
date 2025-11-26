const mongoose = require("mongoose");

const RegistroSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  local: String,
  foto: String,
  dataHora: String,
  laboratorio: String
});

module.exports = mongoose.model("Registro", RegistroSchema);
