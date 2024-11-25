import { 
	getAllTasksDB, 
	getTaskByIdDB,
	getTaskByNameDB, 
	createNewTaskDB,
	updateTaskDB
} from "../models/tasksModel.js";

export async function getAllTasks(req, res) {

	const tasks = await getAllTasksDB();
	res.status(200).json(tasks);
}

export async function getTaskById(req, res) {

	const taskId = req.params.id;
	const task = await getTaskByIdDB(taskId);
	res.status(200).json(task);
}

export async function getTaskByName(req, res) {

	const taskName = req.params.name;
	const task = await getTaskByNameDB(taskName);
	res.status(200).json(task);
}

export async function createNewTask(req, res) {

	const task = req.body;
	task.done = "false";
	task.date = new Date(task.date);

	const postMessage = await createNewTaskDB(task);
	res.status(200).json({
		message: postMessage,
		taskCreated: task
	});
}

export async function updateTask(req, res) {

	const taskId = req.params.id;

	const taskUpdated = req.body;
	taskUpdated.date = new Date(taskUpdated.date);

	const updatedMessage = await updateTaskDB(taskId, taskUpdated);
	res.status(200).json({
		message: updatedMessage,
		taskUpdated: taskUpdated
	});
}
