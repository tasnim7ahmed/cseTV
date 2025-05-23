require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const passport = require("passport");
const session = require("express-session");
const UserDetails = require("./models/userDetails");
const fileUpload = require("express-fileupload");

// Initialize Firebase Admin SDK
const admin = require('firebase-admin');
const serviceAccount = require('./config/firebase-admin-sdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const port = process.env.PORT || 3000;

// const database_url =
//   "mongodb+srv://admin:admin@cluster0.ixydjpe.mongodb.net/test";

// mongoose
//   .connect(database_url)
//   .then(() => {
//     console.log("Database connected!");
//   })
//   .catch(() => {
//     console.log("Could not connect to database!");
//   });

// app.use(
//   session({
//     secret: "123456",
//     resave: false,
//     saveUninitialized: true,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(UserDetails.createStrategy());
// passport.serializeUser(UserDetails.serializeUser());
// passport.deserializeUser(UserDetails.deserializeUser());
// // UserDetails.register({ username: "admin", active: false }, "admin");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(fileUpload());
// app.use(express.static("public"));
// app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");

// app.use(router);
// app.listen(port, () => {
//   console.log(`App is running at https://localhost:${port}`);
// });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(router);
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
