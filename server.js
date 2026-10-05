const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Product API is running successfully");
});

app.get("/products", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Laptop",
            price: 50000
        },
        {
            id: 2,
            name: "Mobile",
            price: 20000
        }
    ]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});