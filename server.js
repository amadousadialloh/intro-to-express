const express = require("express");
const app = express();

const port = 3000;

// app.get("/greetings/:username", (req, res) => {
//   res.send(`hello there ${req.params.username}`);
// });

app.get("/roll/:number", (req, res) => {
  let rolledNumber = req.params.number;
  if (isNaN(rolledNumber)) {
    res.send(`<p>You must specify a number</p>`);
  } else {
    const randomNumber = Math.floor(Math.random() * rolledNumber);
    res.send(`<p>You rolled a ${randomNumber}</p>`);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
