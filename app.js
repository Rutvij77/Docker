const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Created a Docker image from a GitHub repository!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000...");
});
