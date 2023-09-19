const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use((req, res, next) => {
  const contentType = req.headers["content-type"];

  if (contentType === "application/x-www-form-urlencoded") {
    bodyParser.urlencoded({ extended: true })(req, res, next);
  } else if (contentType === "application/json") {
    bodyParser.json()(req, res, next);
  } else {
    res.status(400).json({ error: "Tipo de conteúdo não suportado" });
  }
});

app.post("/webhook", (req, res) => {
  const data = req.body;

  console.log(JSON.stringify(data));

  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Servidor de webhook está ouvindo na porta ${port}`);
});
