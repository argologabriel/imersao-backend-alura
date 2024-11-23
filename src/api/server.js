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

// Função para pegar todas as tarefas
async function getAllTasks() {
	const db = connection.db("todolist");
	const collection = db.collection("tasks");
	return collection.find().toArray();
}

// Endpoint para pegar todas as tarefas
app.get("/tasks", async (req, res) => {
	const tasks = await getAllTasks();
	res.status(200).json(tasks);
});
