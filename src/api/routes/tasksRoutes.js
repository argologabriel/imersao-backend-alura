import express from "express";
import { getAllTasks, getTaskById } from "../controllers/tasksController.js";

export const routes = (app) => {
	app.use(express.json());

	// Endpoint para buscar todas as tarefas
	app.get("/tasks", getAllTasks);

	// Endpoint para buscar uma tarefa por ID
	app.get("/task/:id", getTaskById);
}
