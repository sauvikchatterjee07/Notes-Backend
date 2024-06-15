const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const getRoutes = require("./Routes/getRoutes");
const postRoutes = require("./Routes/postRoutes");
const putRoutes = require("./Routes/putRoutes");
const deleteRoutes = require("./Routes/deleteRoutes");
const patchRoutes = require("./Routes/patchRoutes");
const bodyParser = require("body-parser");

require("dotenv").config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/get", getRoutes);
app.use("/api/post", postRoutes);
app.use("/api/put", putRoutes);
app.use("/api/delete", deleteRoutes);
app.use("/api/patch", patchRoutes);

connectToDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server Started");
        });
    })
    .catch(() => {
        console.log("Couldn't Start the Server");
    });

//query parameter
//headers
//Body
