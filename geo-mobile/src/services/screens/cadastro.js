import { View, TextInput, Button } from "react-native";
import { api } from "../services/api";
import { useState } from "react";

export default function Cadastro() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [local, setLocal] = useState("");
  const [foto, setFoto] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [laboratorio, setLaboratorio] = useState("");

  async function salvar() {
    await api.post("/registro", {
      titulo,
      descricao,
      local,
      foto,
      dataHora,
      laboratorio
    });
    alert("Salvo com sucesso!");
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Título" onChangeText={setTitulo} />
      <TextInput placeholder="Descrição" onChangeText={setDescricao} />
      <TextInput placeholder="Local" onChangeText={setLocal} />
      <TextInput placeholder="Foto (URL)" onChangeText={setFoto} />
      <TextInput placeholder="Data/Hora" onChangeText={setDataHora} />
      <TextInput placeholder="Laboratório" onChangeText={setLaboratorio} />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}
// Compare this snippet from backend/src/app.js: