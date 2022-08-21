const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

// Route root:  /api/thoughts
router.get("/", getAllThoughts);
router.get("/:id", getSingleThought);
router.post("/", createThought);
router.put("/:id", updateThought);
router.delete("/:id", deleteThought);

module.exports = router;
