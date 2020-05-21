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

app.get("/offline", (req, res) => {
	res.render("offline");
});

/*=============================================>>>>>

				= errors =

===============================================>>>>>*/

app.use((req, res, next) => {
	res.status(404).render("404");
});
app.use((req, res, next) => {
	res.status(500).render("500");
});

/*=============================================>>>>>

				= DO NOT PUT ANYTHING AFTER THIS =

===============================================>>>>>*/

exports.app = functions.https.onRequest(app);
