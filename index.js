import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.connect("mongodb://localhost/CRMdb", {});

//Bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serving static files
app.use(express.static("public"));

routes(app);

app.get("/", (req, res) =>
	res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
