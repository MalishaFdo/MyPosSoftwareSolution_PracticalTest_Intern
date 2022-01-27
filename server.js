const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
//import routes
const productRotes = require("./routes/product");
const invoiceRotes = require("./routes/invoice");

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(productRotes);
app.use(invoiceRotes);

//Database connectivity
const PORT = 5000;
const DB_URL =
  "mongodb+srv://user:1234@practical.hpdhf.mongodb.net/test_db?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("DB connection error", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
