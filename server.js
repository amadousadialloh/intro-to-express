const express = require("express");
const app = express();

const port = 3000;

const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

// app.get("/greetings/:username", (req, res) => {
//   res.send(`hello there ${req.params.username}`);
// });

// app.get("/roll/:number", (req, res) => {
//   let rolledNumber = req.params.number;
//   if (isNaN(rolledNumber)) {
//     res.send(`<p>You must specify a number</p>`);
//   } else {
//     const randomNumber = Math.floor(Math.random() * rolledNumber);
//     res.send(`<p>You rolled a ${randomNumber}</p>`);
//   }
// });

app.get("/collectibles/:indexparam", (req, res) => {
  let indexParam = Number(req.params.indexparam);
  if (!collectibles.includes(collectibles[indexParam])) {
    res.send(`<p> This item is not yet in stock. Check back soon! </p>`);
  } else {
    res.send(
      `<p> So, you want the ${collectibles[indexParam].name}? For ${collectibles[indexParam].price}, it can be yours!`
    );
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
