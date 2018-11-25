const express = require("express");
const path = require("path");

const app = express();
const axios = require("axios");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/news-app-angular"));

//backend routes
app.get("/backend/sources", function(req, res) {
	axios
		.get(
			"https://newsapi.org/v2/sources?language=en&apiKey=" +
				process.env.NEWS_API_KEY
		)
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch(error => {
			res.status(400).json(error.response.data);
		});
});

app.get("/backend/headlines/:source", function(req, res) {
	axios
		.get(
			"https://newsapi.org/v2/top-headlines?sources=" +
				req.params.source +
				"&apiKey=" +
				process.env.NEWS_API_KEY
		)
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch(error => {
			res.status(400).json(error.response.data);
		});
});

//angular routes
app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname + "/dist/news-app-angular/index.html"));
});

// Start the app by listening on the default port
app.listen(process.env.PORT || 8080);
