const path = require("path");
const router = require("express").Router();

// Send every other request to the React app
// Define any API routes before this runs
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;