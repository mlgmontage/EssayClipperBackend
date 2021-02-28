const express = require("express");
const app = express();
const volleyball = require("volleyball");
const cors = require("cors");
const port = process.env.PORT || 8000;
app.use(volleyball);
app.use(cors());
app.use(express.json());

app.use("/api/snipets", require("./api/routes/snipets"));

app.listen(port, () =>
  console.log(`App listenning on http://localhost:${port}`)
);
