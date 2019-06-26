const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});

// API Routes
router.use("/api", apiRoutes);

module.exports = router;