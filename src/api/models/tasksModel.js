import mongodb from "mongodb";
import { connectToDB } from "../config/dbConfig.js";

// Conecta ao banco de dados utilizando a string de conexão
const connection = await connectToDB(process.env.STRING_CONNECTION);

// Função para buscar todas as tarefas
export async function getAllTasksDB() {

	const db = connection.db("todolist");
	const collection = db.collection("tasks");
	return collection.find().toArray();
}

// Função para buscar uma task pelo seu ID
export async function getTaskByIdDB(taskId) {

	const db = connection.db("todolist");
	const collection = db.collection("tasks");
	return await collection.findOne({ _id: new mongodb.ObjectId(taskId) });
}

// Função para buscar uma task pelo seu Nome
export async function getTaskByNameDB(taskName) {

	const db = connection.db("todolist");
	const collection = db.collection("tasks");
	return await collection.findOne({ name: { $regex: new RegExp(taskName, "i") } });
}
