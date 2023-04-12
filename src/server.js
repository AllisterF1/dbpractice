const express = require("express");

const app = express();

app.use(express.json());

app.get("/books", (req, res) => {
    res.send("Hello world");
});

app.listen(5001, () => console.log("server is listening"));
