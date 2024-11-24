import { getAllTasksDB, getTaskByIdDB } from "../models/tasksModel.js";

export async function getAllTasks(req, res) {

	const tasks = await getAllTasksDB();
	res.status(200).json(tasks);
}

export async function getTaskById(req, res) {

	const taskId = req.params.id;
	const task = await getTaskByIdDB(taskId);
	res.status(200).json(task);
}
