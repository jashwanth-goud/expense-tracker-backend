const express = require("express");
const Expense = require("../models/Expense");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE expense
router.post("/", auth, async (req, res) => {
  const { title, amount, category } = req.body;

  const expense = new Expense({
    user: req.user,
    title,
    amount,
    category
  });

  await expense.save();
  res.json(expense);
});

// READ expenses
router.get("/", auth, async (req, res) => {
  const expenses = await Expense.find({ user: req.user });
  res.json(expenses);
});

// DELETE expense
router.delete("/:id", auth, async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Expense deleted" });
});

module.exports = router;
