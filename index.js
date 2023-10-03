
const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");


const app = express();
const port  = process.env.PORT || 9000;

//midleware
app.use(express.json());
app.use('/api', userRoutes);

//rutas
app.get("/", (req, res) => {
    res.send("welcon to my api")
});
mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("Conectado a mongodb Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log(`Server listening on port ${port}`));






