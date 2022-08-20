const router = require("express").Router();

router.get("/users", (req, res) => {
  return res.send("inside user route");
});

module.exports = router;
