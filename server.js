const express = require('express')
const app = express();
const port = 5000;
const path = require('path')
const router = require('./routes')
app.use(router)
app.use(express.static(path.join(__dirname, 'pages')));


app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/pages/contact.html");
});
app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/pages/main.html");
});

PORT = 5000;
app.listen(process.env.PORT || PORT, (err) => {
    err ? console.log(err) : console.log(`server is running on ${PORT}`);
});
