import express from "express";
import { 
	getAllTasks, 
	getTaskById,
	getTaskByName, 
	createNewTask,
	updateTask
} from "../controllers/tasksController.js";

export const routes = (app) => {
	app.use(express.json());

	// Endpoint para buscar todas as tarefas
	app.get("/tasks", getAllTasks);

	// Endpoint para buscar uma tarefa por ID
	app.get("/task/:id", getTaskById);

	// Endpoint para buscar uma tarefa por Nome
	app.get("/taskByName/:name", getTaskByName);

	// Endpoint para adicionar uma nova tarefa
	app.post("/createNewTask", createNewTask);

	// Endpoint para alterar uma tarefa já existente
	app.put("/updateTask/:id", updateTask);
}
