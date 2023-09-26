const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/webhook/twillio", (req, res) => {
  const formData = req.body;

  console.log(formData);
  console.log("---twillio----------------------------------------------");

  res.status(200).json({ origin, formData });
});

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const data = req.body;

  console.log(JSON.stringify(data));
  console.log("--------------------------------------------------------");

  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Servidor de webhook está ouvindo na porta ${port}`);
});
