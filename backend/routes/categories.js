const express = require("express");
const router = express.Router();
const Category = require("../models/Category.js");

//yeni category oluşturma
router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;
    const newCategory = new Category({ name, img });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
  }
});

// Tüm kategorileri getirme (Read- All)
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});
// Belirli bir kategori getirme
router.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findById(categoryId);

    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});
// kategori güncelleme
router.put("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updates = req.body;

    const updatesCategory = await Category.findByIdAndUpdate(
      categoryId,
      updates,
      { new: true }
    );
    res.status(200).json(updatesCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});
//kategori silme
router.delete("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const deletedCategory = await Category.findByIdAndDelete(categoryId); //findByIdAndRemove görmüyor ...

    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found." });
    }

    res.status(200).json(deletedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
