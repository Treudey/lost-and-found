const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// // Send every other request to the React app
// // Define any API routes before this runs
// // router.get('*', function (req, res) {
// //   const index = path.join(__dirname, 'client','build', 'index.html');
// //   res.sendFile(index);
// // });

router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// API Routes
router.use("/api", apiRoutes);

module.exports = router;