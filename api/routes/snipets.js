const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "snipets" });
});

module.exports = router;
