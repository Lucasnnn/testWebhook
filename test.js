const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const data = req.body;

  console.log(JSON.stringify(data));

  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Servidor de webhook está ouvindo na porta ${port}`);
});
