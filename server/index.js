const express = require("express");

// const contacts = require("./contacts");
// const comments = require("./comments");
// const products = require("./products");
// const vehicles = require("./vehicles");
const bodyParser = require("body-parser");

const PORT = 3001;


const contactsRoutes = require("./routes/contactsRoutes");
const commentsRoutes = require("./routes/commentsRoutes");
const productsRoutes = require("./routes/productsRoutes");
const vehiclesRoutes = require("./routes/vehiclesRoutes");

const app = express();
app.use(bodyParser.json());
app.use(contactsRoutes);
app.use(commentsRoutes);
app.use(productsRoutes);
app.use(vehiclesRoutes);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
