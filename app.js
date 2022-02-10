require('dotenv').config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const errorController = require("./controllers/error");
const db = require("./util/database");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

console.log(process.env.DB_PASSWORD)
db.execute("SELECT * FROM products")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
