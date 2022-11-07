const crypto = require("crypto");
const { type } = require("os");

// const books = require("../models/books");
// const bookModel = require("../models/books");

// const getBookList = async (req, res) => {
//   let data = [];
//   let books = [];
//   try {
//     data = await bookModel.find();
//     console.log(data);
//     data.forEach((book) => {
//       books.push({ name: book.name, author: book.author, genre: book.genre });
//     });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     res.render("bookList", { books: books });
//   }
// };

const getUpload = (req, res) => {
  res.render("uploadImages");
};

const postUpload = (req, res) => {
  try {
    const { image } = req.files;
    ftype = image.mimetype;
    if (!ftype.includes("image") || image.size > 5000000) {
      throw "File is not an image or size too large!";
    }
    cwd = process.cwd();
    const image_name = crypto.randomBytes(20).toString("hex");
    move_path = cwd + "/public/images/" + image_name + image.name;
    console.log(move_path);
    image.mv(move_path);
    console.log("Image has been successfully uploaded!");
  } catch (error) {
    console.log(error);
  }
  res.redirect("/");
};

module.exports = { postUpload, getUpload };
