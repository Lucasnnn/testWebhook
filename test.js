const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.post("/webhook/twillio", (req, res) => {
  const origin = req.headers;

  const formData = req.body;

  console.log("header:", origin);
  console.log(formData);
  console.log("---twillio----------------------------------------------");

  res.status(200).json({ origin, formData });
});

app.post("/webhook", (req, res) => {
  const data = req.body;
  const origin = req.headers;

  console.log("Origem:", origin);
  console.log(JSON.stringify(data));
  console.log("--------------------------------------------------------");

  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Servidor de webhook está ouvindo na porta ${port}`);
});
