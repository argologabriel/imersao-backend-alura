import { connectToDB } from "../config/dbConfig.js";

// Conecta ao banco de dados utilizando a string de conexão
const connection = await connectToDB(process.env.STRING_CONNECTION);

// Função para pegar todas as tarefas
export async function getAllTasksDB() {
	const db = connection.db("todolist");
	const collection = db.collection("tasks");
	return collection.find().toArray();
}
