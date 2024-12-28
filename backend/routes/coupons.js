const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon.js");

//yeni coupon oluşturma
router.post("/", async (req, res) => {
  try {
    const { code } = req.body;
    const existingCoupon = await Coupon.findOne({ code });

    if (existingCoupon) {
      return res.status(400).json({ error: "This coupon is alread exists." });
    }

    const newCoupon = new Coupon(req.body);
    await newCoupon.save();

    res.status(201).json(newCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});
// Tüm couponları getirme (Read- All)
router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});
// Belirli bir coupon getirme
router.get("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const coupon = await Coupon.findById(couponId);

    res.status(200).json(coupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});
// Belirli bir coupon getirme (farklı yol)
router.get("/code/:couponCode", async (req, res) => {
  try {
    const couponCode = req.params.couponCode;

    const coupon = await Coupon.findOne({ code: couponCode });

    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found." });
    }
    const { discountPercent } = coupon;
    res.status(200).json({ discountPercent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});
// coupon güncelleme
router.put("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const updates = req.body;

    const existing = await Coupon.findById(couponId);
    if (!existing) {
      return res.status(404).json({ error: "Coupon not found" });
    }

    const updatesCoupon = await Coupon.findByIdAndUpdate(couponId, updates, {
      new: true,
    });
    res.status(200).json(updatesCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});
//coupon silme
router.delete("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;

    const deletedCoupon = await Coupon.findByIdAndDelete(couponId);

    if (!deletedCoupon) {
      return res.status(404).json({ error: "Coupon not found." });
    }

    res.status(200).json(deletedCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
