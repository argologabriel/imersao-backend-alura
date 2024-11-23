import express from "express";
import { routes } from "./routes/tasksRoutes.js";

const app = express();
routes(app);

app.listen(3000, () => {
	console.log("Servidor escutando...");
});
