const express = require("express");
const app = express();
const volleyball = require("volleyball");
const port = process.env.PORT || 8000;
app.use(volleyball);

app.use("/api/snipets", require("./api/routes/snipets"));

app.listen(port, () =>
  console.log(`App listenning on http://localhost:${port}`)
);
