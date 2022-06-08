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

app.listen(port, (err) =>
    err
        ? console.error(err)
        : console.log(`this server is running on port : ${port}`)
);
