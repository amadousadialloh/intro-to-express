const express = require("express");
const app = express();

const port = 3000;

app.get("/greetings/:username", (req, res) => {
  res.send(`hello there ${req.params.username}`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
