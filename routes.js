const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const imageController = require("./controllers/imageController");
const slideshowCOntroller = require("./controllers/slideShowController");
const connectEnsureLogin = require("connect-ensure-login");
const passport = require("passport");

router.get("/", homeController.getHome);
router.get("/slideshow", slideshowCOntroller.getSlideshow);
router.get("/login", homeController.getLogin);
router.get("/logout", homeController.logOut);
router.get("/upload", connectEnsureLogin.ensureLoggedIn(), imageController.getUpload);
router.get(
  "/dashboard",
  connectEnsureLogin.ensureLoggedIn(),
  homeController.getDashboard
);
router.post("/upload", imageController.postUpload);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/dashboard",
  }),
  homeController.postLogin
);

module.exports = router;
