const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");

// yeni bir ürün oluşturma
router.post("/", async (req, res) => {
  try {
    const newProduct = await Product(req.body);
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});
// Tüm ürünleri getirme (Read- All)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});
// Belirli bir ürünleri getirme
router.get("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});
// ürünleri güncelleme
router.put("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const updates = req.body;

    const updatesProduct = await Product.findByIdAndUpdate(productId, updates, {
      new: true,
    });
    res.status(200).json(updatesProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});
// Ürün silme (Delete)
router.delete("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;

    const deletedProduct = await Product.findByIdAndDelete(productId); //findByIdAndRemove görmüyor...

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    res.status(200).json(deletedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});
router.get("/search/:productName", async (req, res) => {
  try {
    const productName = req.params.productName;
    const products = await Product.find({
      name: { $regex: productName, $options: "i" },
    });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
