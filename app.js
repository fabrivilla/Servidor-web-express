const express = require('express')
const app = express()

app.get("/messages", (req, res) => {
	res.send("Hello");
});

app.get("/index.html", (req, res) => {
	res.send("WELCOME TO MY SERVER");
});

app.listen(8080, () => {
	console.log("listening on http://localhost:8080");
})

