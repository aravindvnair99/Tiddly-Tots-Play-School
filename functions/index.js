const functions = require("firebase-functions"),
	express = require("express"),
	app = express();
// admin = require("firebase-admin");

/*=============================================>>>>>

				= init and config =

===============================================>>>>>*/

// admin.initializeApp({
// 	credential: admin.credential.applicationDefault(),
// });
app.set("views", "./views");
app.set("view engine", "ejs");

/*=============================================>>>>>

				= basic routes =

===============================================>>>>>*/

app.get("/about", (req, res) => {
	res.render("about");
});
app.get("/blog", (req, res) => {
	res.render("blog");
});
app.get("/contact", (req, res) => {
	res.render("contact");
});
app.get("/home", (req, res) => {
	res.render("home");
});
app.get("/landing", (req, res) => {
	res.render("landing");
});
app.get("/pricing", (req, res) => {
	res.render("pricing");
});
app.get("/programs", (req, res) => {
	res.render("programs");
});

/*=============================================>>>>>

				= errors =

===============================================>>>>>*/

app.use((req, res, next) => {
	res.status(404).render("404");
});

/*=============================================>>>>>

				= DO NOT PUT ANYTHING AFTER THIS =

===============================================>>>>>*/

exports.app = functions.https.onRequest(app);
