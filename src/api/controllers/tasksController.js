import { getAllTasksDB } from "../models/tasksModel.js";

export async function getAllTasks(req, res) {

	const tasks = await getAllTasksDB();
	res.status(200).json(tasks);
}
