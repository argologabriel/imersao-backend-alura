import express from "express";
import { getAllTasks } from "../controllers/tasksController.js";

export const routes = (app) => {
	app.use(express.json());

	// Endpoint para buscar todas as tarefas
	app.get("/tasks", getAllTasks);
}
