const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// Route root:  /api/thoughts
router.get("/", getAllThoughts);
router.get("/:thoughtId", getSingleThought);
router.post("/", createThought);
router.put("/:thoughtId", updateThought);
router.delete("/:thoughtId", deleteThought);
router.post("/:thoughtId/reactions", createReaction);
router.delete("/:thoughtId/reactions/:reactionId", deleteReaction);

module.exports = router;
