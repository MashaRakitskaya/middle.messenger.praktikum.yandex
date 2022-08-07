const express = require("express");

const app = express();
const PORT = 3000;
const HOST = "localhost";

app.use(express.static(`${__dirname}/dist`));

app.get("*", function (req, res) {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, HOST, function () {
  console.log(`Server listens http://${HOST}:${PORT}`);
});
