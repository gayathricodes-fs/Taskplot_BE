const express = require("express");

const router = express.Router();

const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

// GET all tasks
router.get("/", getTasks);

// GET task by ID
router.get("/:id", getTaskById);

// CREATE new task
router.post("/", createTask);

// UPDATE existing task
router.put("/:id", updateTask);

// DELETE task
router.delete("/:id", deleteTask);

module.exports = router;