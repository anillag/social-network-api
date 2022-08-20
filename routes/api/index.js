const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

// router.get("/users", (req, res) => {
//   return res.send("inside /api/users route");
// });

router.get("/users", getAllUsers);
/**
 * Return all users
 * GET /api/users
 */

router.get("/users/:id", getSingleUser);
/**
 * Return single user from database.
 * GET /api/users/_id
 */

router.post("/users", createUser);
/**
 * Create new User
 * POST /api/users
 */

router.put("/users/:id", updateUser);
/**
 * Update a user
 * PUT /api/users/_id
 */

router.delete("/users/:id", deleteUser);
/**
 * Remove a user from the database
 * DELETE /api/users/_id
 */

module.exports = router;
