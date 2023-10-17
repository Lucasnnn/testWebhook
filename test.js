const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/webhook", async (req, res) => {
  try {
    const data = req.body;

    console.log(data);

    // const apiUrl = "http://zap.plug.farm/webhook/bip/status";

    // const response = await axios.post(apiUrl, data);

    // console.log("Resposta da outra API:", response.data);

    // res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro ao fazer a requisição à outra API:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.listen(port, () => {
  console.log(`Servidor de webhook está ouvindo na porta ${port}`);
});
