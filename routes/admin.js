const express = require("express");

const router = express.Router();
const { body } = require("express-validator");

const adminController = require("../controllers/admin");

router.get("/add-product", adminController.getAddProducts);

router.get("/products", adminController.getProducts);

router.post(
  "/add-product",
  [
    body("title", "Title must have at least 3 characters")
      .isLength({ min: 3 })
      .trim(),
    body("price", "Price must be floating point number").isFloat(),
    body("description")
      .isLength({ min: 3 })
      .withMessage("Description must have at least 3 characters")
      .isLength({ max: 200 })
      .withMessage("Description has max 200 characters")
      .trim(),
  ],
  adminController.postAddProducts
);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post(
  "/edit-product",
  [
    body("title", "Title must have at least 3 characters")
      .isLength({ min: 3 })
      .trim(),
    body("price", "Price must be floating point number").isFloat(),
    body("description")
      .isLength({ min: 3 })
      .withMessage("Description must have at least 3 characters")
      .isLength({ max: 200 })
      .withMessage("Description has max 200 characters")
      .trim(),
  ],
  adminController.postEditProduct
);

router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
