const express = require("express");
const router = express.Router();

router.get("/totalSupply", (req, res) => {
  res.send("1000000000");
});

module.exports = router;
