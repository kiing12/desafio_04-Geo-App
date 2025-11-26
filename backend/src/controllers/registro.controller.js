const Registro = require("../models/Registro");

exports.criarRegistro = async (req, res) => {
  try {
    const novo = new Registro(req.body);
    await novo.save();
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

exports.listarRegistros = async (req, res) => {
  const dados = await Registro.find();
  res.json(dados);
};
exports.obterRegistroPorId = async (req, res) => {
  try {
    const registro = await Registro.findById(req.params.id);
    if (!registro) {
      return res.status(404).json({ erro: "Registro não encontrado" });
    }
    res.json(registro);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};