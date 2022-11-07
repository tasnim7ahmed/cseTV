const path = require("path");
const fs = require("fs");

const getSlideshow = (req, res) => {
  images = [];
  const directoryPath = process.cwd() + "/public/images/";
  console.log(directoryPath);
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    files.forEach(function (file) {
      console.log(file);
      images.push("images/" + file);
    });
    console.log(images);
    res.render("slideshow", { images: images, num_images: images.length });
  });
};

module.exports = { getSlideshow };
