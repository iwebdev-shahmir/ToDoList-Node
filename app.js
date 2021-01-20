const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let items = [];

app.get("/", function(req, res) {

  let today = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    day: day,
    items: items
  });
});

app.post("/", function(req, res) {
  items.push(req.body.item);

  res.redirect("/");
});

app.listen(3000, function() {
  console.log("3000 port");
});
