const express = require("express");
const router = express.Router();

router.get("/totalSupply", (req, res) => {
  res.send("350000000");
});

module.exports = router;
