import express from "express";
import { connectToDB } from "../api/config/dbConfig.js";

const connection = await connectToDB(process.env.STRING_CONNECTION);

const app = express();

app.listen(3000, () => {
	console.log("Servidor escutando...");
});
app.use(express.json());


app.get("/", (req, res) => {
	res.status(200).json(
		{
			Hello: "World"
		}
	);
});
