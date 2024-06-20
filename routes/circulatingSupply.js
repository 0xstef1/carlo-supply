const express = require("express");
const router = express.Router();

router.get("/circulatingSupply", (req, res) => {
  res.send("1000000000");
});

module.exports = router;
