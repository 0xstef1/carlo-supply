const express = require("express");
const router = express.Router();

router.get("/circulatingSupply", (req, res) => {
  res.send("350000000");
});

module.exports = router;
