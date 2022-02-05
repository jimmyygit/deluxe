const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log(adminData.products);
  res.render("shop", {
    pageTitle: "Product",
    products: adminData.products,
  });
});

module.exports = router;
