const functions = require("firebase-functions"),
	express = require("express");
const app = express();

/* =============================================>>>>>

				= init and config =

===============================================>>>>>*/

app.set("views", "./views");
app.set("view engine", "ejs");

/* =============================================>>>>>

				= basic routes =

===============================================>>>>>*/

app.get("/", (_req, res) => {
	res.status(404).send(
		"HTTP 404<br><br>Hey Nuha! Decide on one! <a href='/home'>Home</a> or <a href='/landing'>Landing</a>?"
	);
});
app.get("/about", (_req, res) => {
	res.render("about");
});
app.get("/blog", (_req, res) => {
	res.render("blog");
});
app.get("/contact", (_req, res) => {
	res.render("contact");
});
app.get("/home", (_req, res) => {
	res.render("home");
});
app.get("/landing", (_req, res) => {
	res.render("landing");
});
app.get("/pricing", (_req, res) => {
	res.render("pricing");
});
app.get("/programs", (_req, res) => {
	res.render("programs");
});

/* =============================================>>>>>

				= errors =

===============================================>>>>>*/

app.use((_req, res, _next) => {
	res.status(404).render("404");
});

/* =============================================>>>>>

				= DO NOT PUT ANYTHING AFTER THIS =

===============================================>>>>>*/

exports.app = functions.https.onRequest(app);
