import express from "express";

const app = express();

app.use(express.json());

app.listen(3000, () => {
	console.log("Servidor escutando...");
});


app.get("/", (req, res) => {
	res.status(200).json(
		{
			Hello: "World"
		}
	);
});
