const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// Route root:  /api/users
router.get("/", getAllUsers);
router.get("/:userId", getSingleUser);
router.post("/", createUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);
router.post("/:userId/friends/:friendId", addFriend);
router.delete("/:userId/friends/:friendId", deleteFriend);

module.exports = router;
